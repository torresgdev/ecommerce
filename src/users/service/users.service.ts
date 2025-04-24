import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>
    ) {}

    create(dto: CreateUserDto) {
        const user = this.repo.create(dto);
        return this.repo.save(user);
    }

    findAll() {
        return this.repo.find()
    }

    findById(id: number) {
        return this.repo.findOneBy({id})
    }

    update(id: number, dto: UpdateUserDto) {
        return this.repo.update(id, dto)
    }

    remove(id:number) {
        return this.repo.delete(id);
    }
}
