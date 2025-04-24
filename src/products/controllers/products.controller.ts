import { Body, Controller, Param, Post, Get, Put, Delete } from "@nestjs/common";
import { ProductsService } from "../service/products.service";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { ApiTags, ApiResponse, ApiOperation } from "@nestjs/swagger";

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly service:ProductsService) {}

    @Post()
    @ApiOperation({ summary: 'Cria um novo produto' })
    @ApiResponse({ status: 201, description: 'Produto criado com sucesso.' })
    create(@Body() body: CreateProductDto) {
        return this.service.create(body)
    }

    @Get()
    findAll() {
        return this.service.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findById(+id)
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() body: UpdateProductDto) {
        return this.service.update(+id, body)
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        return this.service.remove(+id)
    }

}