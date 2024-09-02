import {UpdateCommentDto} from "@lib/comment/application/commands/dtos";


export class UpdateCommentCommand {
    constructor(public readonly comment: UpdateCommentDto) {}
}