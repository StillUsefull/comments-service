import {
    Column,
    Entity,
    PrimaryColumn,
    Tree,
    TreeChildren,
    TreeLevelColumn,
    TreeParent
} from "typeorm";



@Entity()
@Tree('materialized-path')
export class CommentEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column({name: 'user_name'})
    username: string;

    @Column()
    email: string

    @Column({name: 'home_page', nullable: true})
    homepage?: string;

    @Column({name: 'user_id'})
    userId: string;

    @Column()
    text: string;

    @Column({nullable: true})
    photo: string;

    @Column({name: 'post_id'})
    postId: string;

    @Column({ name: 'created_at' })
    createdAt: string;

    @Column({ name: 'updated_at' })
    updatedAt: string;

    @TreeChildren()
    children: CommentEntity[];

    @TreeParent()
    parent: CommentEntity;

}