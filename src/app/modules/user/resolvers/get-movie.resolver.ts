import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { Movie } from "../models/movie.interface";
import { MoviesService } from "../services/movies.service";

@Injectable({
  providedIn: "root",
})
export class GetMovieResolver implements Resolve<Movie | undefined> {
  constructor(private moviesService: MoviesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie | undefined> {
    const title: string | null = route.params["title"];

    if (title === null) {
      this.router.navigateByUrl("/user/movies");
      return EMPTY;
    } else {
      return this.moviesService.fetchMovieByTitle(title);
    }
  }
}
