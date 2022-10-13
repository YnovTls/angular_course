import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Movie } from "../models/movie.interface";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private movies: Movie[] = [
    {
      title: "Interstellar",
      image: "https://fr.web.img5.acsta.net/c_310_420/pictures/14/09/24/12/08/158828.jpg",
    },
    {
      title: "TOP GUN: MAVERICK",
      image: "https://fr.web.img6.acsta.net/c_310_420/pictures/22/03/29/15/12/0827894.jpg",
    },
    {
      title: "La Ligne Verte",
      image: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg",
    },
  ];

  constructor() {}

  public fetchMovies(): Observable<Movie[]> {
    return of(this.movies).pipe(delay(2000));
  }

  public fetchMovieByTitle(title: string): Observable<Movie | undefined> {
    return of(this.movies.find((movie) => movie.title === title)).pipe(delay(2000));
  }
}
