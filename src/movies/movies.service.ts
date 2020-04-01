import { Injectable } from '@nestjs/common';
import { NewMovieDto } from 'src/model/newMovieDto';
import { RatingDto } from 'src/model/ratingDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity'

@Injectable()
export class MoviesService {

  constructor(@InjectRepository(Movie) private moviesReposiroty: Repository<Movie>) {}

  findAll(): Promise<Movie[]> {
    return this.moviesReposiroty.find();
  }

  create(newMovie: NewMovieDto) {
    const movie = this.moviesReposiroty.create(newMovie);
    return this.moviesReposiroty.save(movie);
  }

  find(id: string): Promise<Movie> {
    return this.moviesReposiroty.findOne(id)
  }

  update(movie: Movie) {
    this.moviesReposiroty.update(movie.id, movie);
  }

  async delete(id: string) {
    const movie = await this.moviesReposiroty.findOne(id)

    await movie.remove();
  }

  async rateMovie(id: string, rate: RatingDto) {
    const movie = await this.moviesReposiroty.findOne(id);

    movie.numberOfRates += 1;
    movie.rating =  Number(( (movie.rating * movie.numberOfRates + rate.rating) / movie.numberOfRates).toPrecision(2));
    await movie.save();
  }
}
