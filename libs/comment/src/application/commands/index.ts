import {CreateCommentHandler} from "@lib/comment/application/commands/create-comment/handler";
import {UpdateCommentHandler} from "@lib/comment/application/commands/update-comment/handler";


export const COMMENT_COMMAND_HANDLERS = [
    CreateCommentHandler,
    UpdateCommentHandler
];