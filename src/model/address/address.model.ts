import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '../user/user.model';

@Entity()
class Address {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public street: string;

    @Column()
    public city: string;

    @Column()
    public country: string;

    @OneToOne(() => User, (user: User) => user.address)
    public user: User;
}

export default Address;
