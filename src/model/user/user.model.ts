import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Address from '../address/address.model';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    public id?: string;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column()
    public password: string;

    @OneToOne(() => Address)
    @JoinColumn()
    public address?: Address;
}

export default User;
