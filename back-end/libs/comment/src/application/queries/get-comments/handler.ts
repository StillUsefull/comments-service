import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {CommentAggregate} from "@lib/comment/domain";
import {CommentRepository} from "@lib/comment/providers";
import {GetCommentsQuery} from "@lib/comment/application/queries/get-comments/query";
import {NotFoundException} from "@nestjs/common";

@QueryHandler(GetCommentsQuery)
export class GetCommentsHandler implements IQueryHandler<GetCommentsQuery, { comments: CommentAggregate[], hasMore: boolean }>{
    constructor(private readonly repository: CommentRepository) {
    }
    async execute({postId, pagination}: GetCommentsQuery): Promise<{ comments: CommentAggregate[], hasMore: boolean }> {
        try {
            return this.repository.findAll(postId, pagination)
        } catch (err) {
            throw new NotFoundException(`Can not find any comment to post with id ${postId}`);
        }
    }
}