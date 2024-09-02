export class CommentDeletedEvent {
    constructor(
        public readonly photoKeys: string[],
    ) {}
}