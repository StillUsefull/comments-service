import {CommentAggregate, IComment} from "@lib/comment/domain";


export abstract class CommentRepository {
    abstract save(comment: IComment): Promise<CommentAggregate>;
    abstract delete(id: string): Promise<boolean>;
    abstract findAll(postId: string): Promise<CommentAggregate[]>;
    abstract findOne(id: string): Promise<CommentAggregate>;
    abstract findTree(postId: string): Promise<CommentAggregate[]>;
    abstract addReply(parentID: string, comment: IComment): Promise<CommentAggregate>;
}