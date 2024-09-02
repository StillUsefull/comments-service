import {CommentRepository} from "@lib/comment/providers/comment.repository";
import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CommentEntity} from "@lib/entities";
import {IsNull, TreeRepository} from "typeorm";
import {CommentAggregate, IComment} from "@lib/comment/domain";
import {PaginationDto} from "@lib/shared/dtos/pagination.dto";


@Injectable()
export class CommentAdapter implements CommentRepository {

    constructor(@InjectRepository(CommentEntity) private readonly repository: TreeRepository<CommentEntity>) {}

    async create(comment: IComment): Promise<CommentAggregate> {
        const { parentComment, ...createObject } = comment;
        let parent: CommentEntity | undefined;

        if (parentComment) {
            parent = await this.repository.findOne({ where: { id: parentComment } });
            if (!parent) {
                throw new BadRequestException('Parent comment not found');
            }
        }

        const savedComment = this.repository.create({
            ...createObject,
            parent,
        });

        await this.repository.save(savedComment);

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

        await this.repository.update({ id }, updateObject);
        return this.findOne(id);
    }

    async delete(id: string): Promise<string[]> {
        const comment = await this.repository.findOne({ where: { id } });

        if (!comment) {
            throw new BadRequestException('Comment not found');
        }

        const commentsToDelete = await this.repository.findDescendants(comment);

        const photos = commentsToDelete
            .map(comment => comment.photo)
            .filter(photo => !!photo);

        await this.repository.remove(commentsToDelete);

        return photos;
    }

    async findAll(postId: string, pagination: PaginationDto): Promise<CommentAggregate[]> {

        const { offset, limit } = pagination;

        const rootComments = await this.repository.find({
            where: { postId, parent: IsNull() },
            skip: offset,
            take: limit,
            order: { updatedAt: 'DESC' },
        });

        const trees = await Promise.all(
            rootComments.map(rootComment => this.repository.findDescendantsTree(rootComment))
        );

        return trees.map(tree => CommentAggregate.create(tree));

    }


    async findOne(id: string): Promise<CommentAggregate> {
        const comment = await this.repository.findOne({ where: { id } });
        if (!comment) {
            return null;
        }
        const tree = await this.repository.findDescendantsTree(comment);
        return CommentAggregate.create(tree);
    }
}