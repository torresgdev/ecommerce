import { Controller, Body, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { UserService } from "../service/users.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Post()
    @ApiOperation({ summary: 'Cria um novo usuário' })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
    create(@Body() body: CreateUserDto) {
        return this.service.create(body)
    }

    @Get()
    @ApiOperation({ summary: 'Lista todos os usuários' })
    findAll() {
        return this.service.findAll()
    }

    @Get(':id')
    @ApiOperation({ summary: 'Busca usuário por ID' })
    findOne(@Param('id') id:string) {
        return this.service.findById
    }
    
    @Put(':id')
    @ApiOperation({ summary: 'Atualiza um usuário' })
    update(@Param('id') id:string, @Body() body: UpdateUserDto) {
        return this.service.update(+id, body)
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remove um usuário' })
    remove(@Param('id') id:string) {
        return this.service.remove(+id)
    }
}