import {CreateCommentHandler} from "@lib/comment/application/commands/create-comment/handler";
import {UpdateCommentHandler} from "@lib/comment/application/commands/update-comment/handler";
import {DeleteCommentHandler} from "@lib/comment/application/commands/delete-comment/handler";


export const COMMENT_COMMAND_HANDLERS = [
    CreateCommentHandler,
    UpdateCommentHandler,
    DeleteCommentHandler
];