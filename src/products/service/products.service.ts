import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "../entity/product.entity";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private repo: Repository<Product>
    ) {}

    create(data: CreateProductDto) {
        const product = this.repo.create(data)
        return this.repo.save(product)
    }

    findAll() {
        return this.repo.find()
    }

    findById(id:number) {
        return this.repo.findOneBy({id})
    }

    update(id: number, data:UpdateProductDto) {
        return this.repo.update(id, data)
    }

    remove(id: number) {
        return this.repo.delete(id)
    }
}