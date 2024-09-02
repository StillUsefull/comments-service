import {CommentAggregate, IComment} from "@lib/comment/domain";
import {PaginationDto} from "@lib/shared/dtos/pagination.dto";


export abstract class CommentRepository {
    abstract create(comment: IComment): Promise<CommentAggregate>;
    abstract update(comment: Partial<IComment>): Promise<CommentAggregate>;
    abstract delete(id: string): Promise<string[]>;
    abstract findAll(postId: string, pagination: PaginationDto): Promise<CommentAggregate[]>;
    abstract findOne(id: string): Promise<CommentAggregate>;
}