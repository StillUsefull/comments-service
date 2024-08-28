import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {CommentAggregate} from "@lib/comment/domain";
import {CommentRepository} from "@lib/comment/providers";
import {GetCommentsQuery} from "@lib/comment/application/queries/get-comments/query";
import {NotFoundException} from "@nestjs/common";

@QueryHandler(GetCommentsQuery)
export class GetCommentsHandler implements IQueryHandler<GetCommentsQuery, CommentAggregate>{
    constructor(private readonly repository: CommentRepository) {
    }
    async execute({postId}: GetCommentsQuery): Promise<CommentAggregate[]> {
        try {
            return this.repository.findAll(postId)
        } catch (err) {
            throw new NotFoundException(`Can not find any comment to post with id ${postId}`);
        }
    }
}