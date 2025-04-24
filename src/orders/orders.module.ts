import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersService } from "./services/orders.service";
import { OrdersController } from "./controllers/orders.controllers";
import { Order } from "./entity/order.entity";
import { User } from "src/users/entity/user.entity";
import { Product } from "src/products/entity/product.entity";
import { OrderItem } from "./entity/order-item.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Order, OrderItem, User, Product])],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrdersModule {}