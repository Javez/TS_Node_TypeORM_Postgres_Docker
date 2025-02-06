import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '../user/user.model';

@Entity()
class Address {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column('text')
    public street: string;

    @Column('text')
    public city: string;

    @Column('text')
    public country: string;

    @OneToOne(() => User, (user: User) => user.address)
    public user: User;
}

export default Address;
