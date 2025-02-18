import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Post from './post.model';

@Entity()
class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @ManyToMany(() => Post, (post: Post) => post.categories)
    public posts: Post[];
}

export default Category;
