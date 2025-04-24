import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsService } from "./service/products.service";
import { ProductsController } from "./controllers/products.controller";
import { Product } from "./entity/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductModule {}