import {CommentRepository} from "@lib/comment/providers/comment.repository";
import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CommentEntity} from "@lib/entities";
import {IsNull, Repository} from "typeorm";
import {CommentAggregate, IComment} from "@lib/comment/domain";


@Injectable()
export class CommentAdapter implements CommentRepository {

    constructor(@InjectRepository(CommentEntity) private readonly repository: Repository<CommentEntity>) {}

    async create(comment: IComment): Promise<CommentAggregate> {
        const { parentComment, ...createObject } = comment;
        let parent: CommentEntity | undefined;

        if (parentComment) {
            parent = await this.repository.findOne({ where: { id: parentComment } });
            if (!parent) {
                throw new BadRequestException('Parent comment not found');
            }
        }
        const savedComment = await this.repository.save({
            ...createObject,
            parent
        });

        return CommentAggregate.create(savedComment);
    }

    async update(comment: Partial<IComment>): Promise<CommentAggregate> {
        const { id, ...updateObject } = comment;
        if (!id) {
            throw new BadRequestException('Comment ID is required for update');
        }

        const existingComment = await this.findOne(id);
        if (!existingComment) {
            throw new BadRequestException('Comment not found');
        }

        console.log(updateObject)
        await this.repository.update({ id }, updateObject);
        return this.findOne(id);
    }

    // never used (cascade)
    async delete(id: string): Promise<boolean>{
        const result = await this.repository.delete({id});
        return result.affected > 0;
    }


    async findAll(postId: string): Promise<CommentAggregate[]> {
        const rootComments = await this.repository.find({
            where: { postId, parent: IsNull() }
        });
        for (const comment of rootComments) {
            await this.loadChildren(comment);
        }
        return this.buildTree(rootComments);
    }


    async findOne(id: string): Promise<CommentAggregate> {
        const comment = await this.repository.findOne({
            where: {id},
            relations: ['children', 'parent']
        });
        if (!comment) {
            return null;
        }
        return CommentAggregate.create(comment);
    }


    // !!! some slow method (two recursions) options: stored procedures || materialized path ?
    private async loadChildren(comment: CommentEntity): Promise<void> {
        const children = await this.repository.find({
            where: { parent: comment },
        });

        if (children.length > 0) {
            comment.children = children;
            for (const child of children) {
                await this.loadChildren(child);
            }
        }
    }

    private buildTree(comments: CommentEntity[]): CommentAggregate[] {
        return comments.map(comment => {
            const aggregate = CommentAggregate.create(comment);
            if (comment.children && comment.children.length > 0) {
                aggregate.children = this.buildTree(comment.children);
            }
            return aggregate;
        });
    }
}