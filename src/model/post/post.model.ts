import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Post {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column('text')
    public title: string;

    @Column('text')
    public content: string;
}

export default Post;
