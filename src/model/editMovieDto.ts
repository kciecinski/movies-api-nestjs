import { IsString, IsOptional, IsEmpty } from 'class-validator';

export class EditMovieDto {
  @IsString() @IsOptional() readonly title: string;
  @IsString() @IsOptional() readonly desc: string;
  @IsEmpty() @IsOptional() readonly rating: number;
  @IsEmpty() @IsOptional() readonly numberOfRates: number;
}
