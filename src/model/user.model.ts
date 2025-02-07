import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Address from './address.model';
import Post from './post.model';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column('text')
    public name: string;

    @Column('text')
    public email: string;

    @Column('text')
    public password: string;

    @OneToOne(() => Address, (address: Address) => address.user, {
        cascade: true,
        eager: true,
    })
    @JoinColumn()
    public address?: Address;

    @OneToMany(() => Post, (post: Post) => post.author)
    public posts?: Post[];
}

export default User;
