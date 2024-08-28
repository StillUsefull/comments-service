import {CommentRepository} from "@lib/comment/providers/comment.repository";
import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CommentEntity} from "@lib/entities";
import {Repository} from "typeorm";
import {CommentAggregate, IComment} from "@lib/comment/domain";


@Injectable()
export class CommentAdapter implements CommentRepository {

    constructor(@InjectRepository(CommentEntity) private readonly repository: Repository<CommentEntity>) {}

    async save(comment: IComment): Promise<CommentAggregate>{

        // update option
        const existComment = await this.findOne(comment.id);
        if (existComment) {
            const {id, postId, ...updateObject} = comment;
            await this.repository.update({id}, updateObject);
            return this.findOne(id);
        }

        const savedComment = await this.repository.save(comment);
        return CommentAggregate.create(savedComment);
    }

    // never used
    async delete(id: string): Promise<boolean>{
        const result = await this.repository.delete({id}).catch(err => {
            return false;
        })
        return !!result;
    }


    async findAll(postId: string): Promise<CommentAggregate[]>{
        const comments = await this.repository.find({
            where: {postId},
            relations: ['children']
        });
        return comments.map(comment => CommentAggregate.create(comment));
    }


    async findOne(id: string): Promise<CommentAggregate>{
        const existComment = await this.repository.findOne({where: {id}})
            .catch(err => {
                return null;
            });
        if (!existComment){
            return null;
        }
        return CommentAggregate.create(existComment);
    }

    async findTree(postId: string): Promise<CommentAggregate[]> {
        const comments = await this.repository.find({
            where: {postId, parentComment: null},
            relations: ['children']
        });
        return this.buildTree(comments);
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

    async addReply(parentId: string, comment: IComment): Promise<CommentAggregate>{
        const parentComment = await this.findOne(parentId);
        if (!parentComment){
            throw new BadRequestException(`Can not reply on this comment`);
        }
        const newComment = CommentAggregate.create({...comment, parentComment: parentId})
        const savedComment = await this.repository.save(newComment);
        return CommentAggregate.create(savedComment)
    }
}