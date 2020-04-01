import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import {MoviesService} from './movies.service';
import { Movies } from 'src/model/movies';
import { Movie } from 'src/model/movie';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async index(): Promise<Movies> {
    return this.moviesService.findAll();
  }
  
  @Get("/:id")
  async find(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.find(id);
  }

  @Post()
  async create(@Body() movie: Movie): Promise<void> {
    return this.moviesService.create(movie);
  }

  @Put()
  async update(@Body() movie: Movie): Promise<void> {
    return this.moviesService.update(movie);
  }

  @Delete('/:id')
  async delete(@Param('id') id:string): Promise<void> {
    return this.moviesService.delete(id);
  }
}
