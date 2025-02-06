import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '../user/user.model';

@Entity()
class Post {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column('text')
    public title: string;

    @Column('text')
    public content: string;

    @ManyToOne(() => User, (user: User) => user.posts)
    public author: User;
}

export default Post;
