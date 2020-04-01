import { IsNotEmpty, IsString } from 'class-validator';

export class NewMovieDto {
  @IsString() @IsNotEmpty() readonly title: string;
  @IsString() @IsNotEmpty() readonly desc: string;
}
