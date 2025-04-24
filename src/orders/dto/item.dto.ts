import { IsIn, IsInt, isInt, IsPositive, isPositive } from "class-validator";

export class itemDto {
    @IsInt()
    product_id: number;

    @IsInt()
    @IsPositive()
    quantity: number;
}