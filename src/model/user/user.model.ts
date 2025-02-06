import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Address from '../address/address.model';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    public id?: string;

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
}

export default User;
