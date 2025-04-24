import { IsInt, ValidateNested, ArrayMinSize } from "class-validator";
import { Type } from "class-transformer";
import { itemDto } from "./item.dto";

export class CreateOrderDto {

    @IsInt()
    user_id:number;

    @ArrayMinSize(1)
    @ValidateNested({each:true})
    @Type(()=> itemDto)
    items: itemDto[];
}