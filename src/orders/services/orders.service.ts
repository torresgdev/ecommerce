import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "../entity/order.entity";
import { OrderItem } from "../entity/order-item.entity";
import { CreateOrderDto } from "../dto/create-order.dto";
import { User } from "src/users/entity/user.entity";
import { Product } from "src/products/entity/product.entity";


@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order) private orderRepo: Repository<Order>,
        @InjectRepository(OrderItem) private orderItemRepo: Repository<OrderItem>,
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectRepository(Product) private productRepo: Repository<Product>,
    ) {}


    async create(createOrderDto: CreateOrderDto) {
        const { user_id, items} = createOrderDto;

        const user = await this.userRepo.findOne({where: { id: user_id}});
        if (!user) throw new NotFoundException('User not found');

        const orderItems: OrderItem[] = []
        let total = 0;

        for (const item of items) {
            const product = await this.productRepo.findOne({
              where: { id: item.product_id },
            });
            if (!product) throw new NotFoundException(`Product ${item.product_id} not found`);
      
            const orderItem = this.orderItemRepo.create({
              product,
              quantity: item.quantity,
              price: product.price,
            });

            total += product.price * item.quantity;
            orderItems.push(orderItem);
        }

        const order = this.orderRepo.create({
            user,
            items: orderItems,
            total,
        })
        return this.orderRepo.save(order);
    }

    findAll() {
        return this.orderRepo.find({
            relations: ['user', 'items', 'items.product']
        });
    }
}