import {CreateCommentDto} from "@lib/comment/application/commands/dtos";


export class CreateCommentCommand {
    constructor(public readonly comment: CreateCommentDto) {
    }
}