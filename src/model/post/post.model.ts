import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Post {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public title: string | undefined;

    @Column()
    public content: string | undefined;
}

export default Post;
