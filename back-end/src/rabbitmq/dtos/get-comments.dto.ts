import {PaginationDto} from "@lib/shared/dtos/pagination.dto";


export class GetCommentsDto {
    postId: string
    query: PaginationDto
}