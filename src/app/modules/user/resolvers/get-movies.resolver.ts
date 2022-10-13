import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.interface";
import { MoviesService } from "../services/movies.service";

@Injectable({
  providedIn: "root",
})
export class GetMoviesResolver implements Resolve<Movie[]> {
  constructor(private moviesService: MoviesService) {}

  resolve(): Observable<Movie[]> {
    return this.moviesService.fetchMovies();
  }
}
