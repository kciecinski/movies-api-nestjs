import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class RatingDto {
  @IsNumber() @IsNotEmpty() @Min(0) @Max(10) readonly rating: number;
}
