import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "src/products/entity/product.entity";
import { Order } from "./order.entity";

@Entity() 
export class OrderItem {

    @PrimaryColumn()
    id: number;

    @ManyToOne(()=> Order,(order) =>order.items)
    @JoinColumn({ name: 'order_id'})
    order: Order;

    @ManyToOne(()=> Product)
    @JoinColumn({name: 'product_id'})
    prodcut:Product;

    @Column('int')
    quantity: number;

    @Column('decimal')
    price: number;
}
