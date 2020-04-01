import { IsOptional ,IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class Movie {
  @IsString() @IsOptional() readonly id: string;
  @IsString() @IsNotEmpty() readonly title: string;
  @IsString() @IsNotEmpty() readonly desc: string;
  @IsNumber() @IsNotEmpty() @Min(0) rating: number;  
  @IsNumber() @IsNotEmpty() @Min(0) numberOfRates: number;
}
