import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";



@Entity()
export class CommentEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column({name: 'user_name'})
    username: string;

    @Column()
    email: string

    @Column({name: 'home_page', nullable: true})
    homepage?: string;

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

    @ManyToOne(() => CommentEntity, comment => comment.children, {nullable: true})
    @JoinColumn({name: 'parent_comment'})
    parent?: CommentEntity;

    @OneToMany(() => CommentEntity, comment => comment.parent)
    children?: CommentEntity[];
}