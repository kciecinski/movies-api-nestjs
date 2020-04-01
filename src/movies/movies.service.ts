import { Injectable } from '@nestjs/common';
import { Movies } from '../model/movies';
import { Movie } from 'src/model/movie';
import { NewMovieDto } from 'src/model/newMovieDto';
import { RatingDto } from 'src/model/ratingDto';


@Injectable()
export class MoviesService {

  private readonly shortId = require("shortid");

  private readonly movies: Movies = {
    1:{
      id: "1",
      title : "Star Wars: Episode I - The Phantom Menace",
      desc : "The evil Trade Federation, led by Nute Gunray is planning to take over the peaceful world of Naboo. Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi are sent to confront the leaders. But not everything goes to plan. The two Jedi escape, and along with their new Gungan friend, Jar Jar Binks head to Naboo to warn Queen Amidala, but droids have already started to capture Naboo and the Queen is not safe there. Eventually, they land on Tatooine, where they become friends with a young boy known as Anakin Skywalker. Qui-Gon is curious about the boy, and sees a bright future for him. The group must now find a way of getting to Coruscant and to finally solve this trade dispute, but there is someone else hiding in the shadows. Are the Sith really extinct? Is the Queen really who she says she is? And what's so special about this young boy?",
      rating: 0,
      numberOfRates: 0
    },
  
    2:{
      id: "2",
      title : "Star Wars: Episode II - Attack of the Clones",
      desc : "Ten years after the 'Phantom Menace' threatened the planet Naboo, Padmé Amidala is now a Senator representing her homeworld. A faction of political separatists, led by Count Dooku, attempts to assassinate her. There are not enough Jedi to defend the Republic against the threat, so Chancellor Palpatine enlists the aid of Jango Fett, who promises that his army of clones will handle the situation. Meanwhile, Obi-Wan Kenobi continues to train the young Jedi Anakin Skywalker, who fears that the Jedi code will forbid his growing romance with Amidala.",
      rating: 0,
      numberOfRates: 0
    },
  
    3:{
      id: "3",
      title : "Star Wars: Episode III - Revenge of the Sith",
      desc : "Three years after the onset of the Clone Wars; the noble Jedi Knights are spread out across the galaxy leading a massive clone army in the war against the Separatists. After Chancellor Palpatine is kidnapped, Jedi Master Obi-Wan Kenobi and his former Padawan, Anakin Skywalker, are dispatched to eliminate the evil General Grievous. Meanwhile, Anakin's friendship with the Chancellor arouses suspicion in the Jedi Order, and dangerous to the Jedi Knight himself. When the sinister Sith Lord, Darth Sidious, unveils a plot to take over the galaxy, the fate of Anakin, the Jedi order, and the entire galaxy is at stake. Upon his return, Anakin Skywalker's wife Padme Amidala is pregnant, but he is having visions of her dying in childbirth. Anakin Skywalker ultimately turns his back on the Jedi, thus completing his journey to the dark side and his transformation into Darth Vader. Obi-Wan Kenobi must face his former apprentice in a ferocious lightsaber duel on the fiery world of Mustafar.",
      rating: 0,
      numberOfRates: 0

    },
  
    4:{
      id: "4",
      title : "Star Wars: Episode IV - A New Hope",
      desc : "Part IV in George Lucas' epic, Star Wars: A New Hope opens with a Rebel ship being boarded by the tyrannical Darth Vader. The plot then follows the life of a simple farm boy, Luke Skywalker, as he and his newly met allies (Han Solo, Chewbacca, Obi-Wan Kenobi, C-3PO, R2-D2) attempt to rescue a Rebel leader, Princess Leia, from the clutches of the Empire. The conclusion is culminated as the Rebels, including Skywalker and flying ace Wedge Antilles make an attack on the Empire's most powerful and ominous weapon, the Death Star.",
      rating: 0,
      numberOfRates: 0

    },
  
    5:{
      id: "5",
      title : "Star Wars: Episode V - The Empire Strikes Back",
      desc : "Fleeing the evil Galactic Empire, the Rebels abandon their new base in an assault with the Imperial AT-AT walkers on the ice world of Hoth. Princess Leia, Han Solo, Chewbacca and the droid C-3PO escape in the Millennium Falcon, but are later captured by Darth Vader on Bespin. Meanwhile, Luke Skywalker and the droid R2-D2 follows Obi-Wan Kenobi's posthumous command, and receives Jedi training from Master Yoda on the swamp world of Dagobah. Will Skywalker manage to rescue his friends from the Dark Lord?",
      rating: 0,
      numberOfRates: 0

    },
  
    6:{
      id: "6",
      title : "Star Wars: Episode VI - Return of the Jedi",
      desc : "Darth Vader and the Empire are building a new, indestructible Death Star. Meanwhile, Han Solo has been imprisoned, and Luke Skywalker has sent R2-D2 and C-3PO to try and free him. Princess Leia - disguised as a bounty hunter - and Chewbacca go along as well. The final battle takes place on the moon of Endor, with its natural inhabitants, the Ewoks, lending a hand to the Rebels. Will Darth Vader and the Dark Side overcome the Rebels and take over the universe?",
      rating: 0,
      numberOfRates: 0

    }
  };

  findAll(): Movies {
    return this.movies
  }

  create(newMovie: NewMovieDto) {
    const id = this.shortId.generate();
    this.movies[id] = {title: newMovie.title, desc: newMovie.desc, id: id , rating:0, numberOfRates:0 };
  }

  find(id: string): Movie {
    this.validateMovieExist(id);
    return this.movies[id];
  }

  update(movie: Movie) {
    this.validateMovieExist(movie.id);
    this.movies[movie.id] = movie;
  }

  delete(id: string) {
    this.validateMovieExist(id)
    delete this.movies[id];
  }

  validateMovieExist(id: string) {
    if(!this.movies[id]) throw new Error("No movie");
  } 

  rateMovie(id: string, rate: RatingDto) {
    const movie = this.find(id);
    movie.numberOfRates += 1;
    movie.rating =  Number(( (movie.rating * movie.numberOfRates + rate.rating) / movie.numberOfRates).toPrecision(2));
  }
}
