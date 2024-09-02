import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

@ArgsType()
export class PaginationDto{
    @Field(() => Int, { description: 'Number of items to skip', defaultValue: 0 })
    @IsOptional()
    @Min(0)
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Type(() => Number)
    offset = 0;

    @Field(() => Int, { description: 'Number of items to fetch', defaultValue: 15 })
    @IsOptional()
    @IsNumber({ allowNaN: false, allowInfinity: false })
    @Type(() => Number)
    @IsPositive()
    limit = 15;

}
