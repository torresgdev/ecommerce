import { Controller, Body, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { UserService } from "../service/users.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.service.create(body)
    }

    @Get()
    findAll() {
        return this.service.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.service.findById
    }
    
    @Put(':id')
    update(@Param('id') id:string, @Body() body: UpdateUserDto) {
        return this.service.update(+id, body)
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.service.remove(+id)
    }
}