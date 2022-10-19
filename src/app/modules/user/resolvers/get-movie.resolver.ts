import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { LoaderService } from "src/app/core/services/loader.service";
import { Movie } from "../models/movie.interface";
import { MoviesService } from "../services/movies.service";

@Injectable({
  providedIn: "root",
})
export class GetMovieResolver implements Resolve<Movie | undefined> {
  constructor(private moviesService: MoviesService, private router: Router, private loaderService: LoaderService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie | undefined> {
    const loaderId = this.loaderService.addLoader({ isMessageDisplayed: true, message: "Chargement", state: true, id: "MOVIE_RESOLVER_ID" });
    const title: string | null = route.params["title"];

    if (title === null) {
      this.loaderService.deleteLoaderById(loaderId);
      this.router.navigateByUrl("/user/movies");
      return EMPTY;
    } else {
      return this.moviesService.fetchMovieByTitle(title);
    }
  }
}
