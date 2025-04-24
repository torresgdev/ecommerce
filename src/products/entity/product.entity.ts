import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    name: string;

    @Column()
    @ApiProperty()
    description: string;

    @Column('decimal')
    @ApiProperty()
    price: number;

    @Column()
    @ApiProperty()
    stock:number;

    @Column({type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    @ApiProperty()
    createdAt: Date;
}