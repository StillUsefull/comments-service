import {CommentAggregate, IComment} from "@lib/comment/domain";


export abstract class CommentRepository {
    abstract create(comment: IComment): Promise<CommentAggregate>;
    abstract update(comment: Partial<IComment>): Promise<CommentAggregate>;
    abstract delete(id: string): Promise<boolean>;
    abstract findAll(postId: string): Promise<CommentAggregate[]>;
    abstract findOne(id: string): Promise<CommentAggregate>;
}