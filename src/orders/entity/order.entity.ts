import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, OneToMany} from "typeorm";
import { User } from "src/users/entity/user.entity";
import { OrderItem } from "./order-item.entity";


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;

    @OneToMany(()=> OrderItem, (item) => item.order,{cascade:true})
    items: OrderItem[];

    @Column('decimal')
    total: number;

    @CreateDateColumn()
    createdAt: Date;
}
