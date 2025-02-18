import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.model';
import Category from './category.model';

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

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];
}

export default Post;
