import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { UserService } from "./service/users.service";
import { UserController } from "./controller/users.controller";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[UserController],
    providers:[UserService]
})
export class UsersModule {}