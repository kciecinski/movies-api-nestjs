import { Actor } from './actor';

export class Movie {
  readonly id: string;
  readonly title: string;
  readonly desc: Text;
  readonly rating: number;  
  readonly Actors: Actor[]; 
}
