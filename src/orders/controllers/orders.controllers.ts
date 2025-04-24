import { Body, Post, Get, Controller } from "@nestjs/common";
import { OrdersService } from "../services/orders.service";
import { CreateOrderDto } from "../dto/create-order.dto";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags('orders')
@Controller('orders')
export class OrdersController{
    constructor(private readonly service:OrdersService) {}

    @Post()
    @ApiOperation({summary: 'Criar pedido'})
    create(@Body() body:CreateOrderDto) {
        return this.service.create(body)
    }

    @Get()
    @ApiOperation({ summary: 'Listar pedidos'})
    findAll() {
        return this.service.findAll();
    }
}