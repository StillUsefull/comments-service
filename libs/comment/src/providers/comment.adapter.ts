import {CommentRepository} from "@lib/comment/providers/comment.repository";
import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CommentEntity} from "@lib/entities";
import {Repository} from "typeorm";
import {CommentAggregate, IComment} from "@lib/comment/domain";


@Injectable()
export class CommentAdapter implements CommentRepository {

    constructor(@InjectRepository(CommentEntity) private readonly repository: Repository<CommentEntity>) {}

    async save(comment: IComment): Promise<CommentAggregate> {
        const { id, postId, parentComment, ...updateObject } = comment;

        // updateOption
        if (id) {
            const existComment = await this.findOne(id);
            if (existComment) {
                await this.repository.update({ id }, updateObject);
                return this.findOne(id);
            }
        }

        if (parentComment) {
            const parentCommentEntity = await this.repository.findOne({ where: { id: parentComment } });
            if (!parentCommentEntity) {
                throw new BadRequestException('Parent comment not found');
            }
        }

        const savedComment = await this.repository.save(comment);
        return CommentAggregate.create(savedComment);
    }

    // never used (cascade)
    async delete(id: string): Promise<boolean>{
        const result = await this.repository.delete({id});
        return result.affected > 0;
    }


    async findAll(postId: string): Promise<CommentAggregate[]> {
        const comments = await this.repository.find({
            where: {postId, parentComment: null},
            relations: ['children']
        });
        return this.buildTree(comments);
    }


    async findOne(id: string): Promise<CommentAggregate> {
        const comment = await this.repository.findOne({
            where: {id},
            relations: ['children']
        });
        if (!comment) {
            return null;
        }
        return CommentAggregate.create(comment);
    }


    private buildTree(comments: CommentEntity[]): CommentAggregate[] {
        return comments.map(comment => {
            const aggregate = CommentAggregate.create(comment);
            if (comment.children){
                aggregate.children = this.buildTree(comment.children)
            }
            return aggregate
        })
    }
}