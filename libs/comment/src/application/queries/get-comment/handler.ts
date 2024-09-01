import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetCommentQuery} from "@lib/comment/application/queries/get-comment/query";
import {CommentRepository} from "@lib/comment/providers";
import {CommentAggregate} from "@lib/comment/domain";
import {NotFoundException} from "@nestjs/common";

@QueryHandler(GetCommentQuery)
export class GetCommentHandler implements IQueryHandler<GetCommentQuery, CommentAggregate>{
    constructor(private readonly repository: CommentRepository) {}
    async execute({id}: GetCommentQuery): Promise<CommentAggregate>{
        try {
            const comment = await this.repository.findOne(id)
            return comment;
        } catch (err) {
            throw new NotFoundException(`Can not find this comment`);
        }
    }
}