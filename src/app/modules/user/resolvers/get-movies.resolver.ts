import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { LoaderService } from "src/app/core/services/loader.service";
import { Movie } from "../models/movie.interface";
import { MoviesService } from "../services/movies.service";

@Injectable({
  providedIn: "root",
})
export class GetMoviesResolver implements Resolve<Movie[]> {
  constructor(private moviesService: MoviesService, private loaderService: LoaderService) {}

  resolve(): Observable<Movie[]> {
    this.loaderService.addLoader({ isMessageDisplayed: true, message: "Chargement", state: true, id: "MOVIES_RESOLVER_ID" });

    return this.moviesService.fetchMovies();
  }
}
