

export interface IComment {
    id: string;
    username: string;
    email: string;
    homepage?: string;
    userId: string;
    text: string;
    photo?: string;
    postId: string;
    parentComment?: string;
    createdAt: string;
    updatedAt: string;
}