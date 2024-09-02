import {PaginationDto} from "@lib/shared/dtos/pagination.dto";


export class GetCommentsQuery {
    constructor(public readonly postId: string, public readonly pagination: PaginationDto) {
    }
}