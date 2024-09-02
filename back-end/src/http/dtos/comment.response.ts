import { Exclude, Expose, Type } from 'class-transformer';

export class CommentResponseDto {
    @Expose()
    id: string;

    @Expose()
    username: string;

    @Expose()
    text: string;

    @Expose()
    userId: string;

    @Expose()
    postId: string;
    
    @Expose()
    homepage?: string;

    @Expose()
    createdAt: string;

    @Expose()
    photo?: string;

    @Expose()
    updatedAt: string;

    @Expose()
    @Type(() => CommentResponseDto)
    children: CommentResponseDto[];

    @Exclude()
    email: string;
}