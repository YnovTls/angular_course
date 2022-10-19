import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { EMPTY, first, Observable, of } from "rxjs";
import { LoaderService } from "src/app/core/services/loader.service";
import { Movie } from "../models/movie.interface";
import { MoviesService } from "../services/movies.service";

@Injectable({
  providedIn: "root",
})
export class GetMovieResolver implements Resolve<Movie[]> {
  private data: Movie[] | undefined;

  constructor(private moviesService: MoviesService, private router: Router, private loaderService: LoaderService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {
    if (this.router.getCurrentNavigation() !== null && this.router.getCurrentNavigation()?.extras.state !== undefined) {
      const state: Movie | undefined = this.router.getCurrentNavigation()!.extras.state!["movie"];
      this.data = state && this.isMovieType(state) ? [state] : undefined;
    }

    if (this.data) {
      return of(this.data);
    } else {
      const loaderId = this.loaderService.addLoader({ isMessageDisplayed: true, message: "Chargement du film", state: true, id: "MOVIE_RESOLVER_ID" });
      const title: string | null = route.params["title"];

      if (title === null) {
        this.loaderService.deleteLoaderById(loaderId);
        this.router.navigateByUrl("/user/movies");
        return EMPTY;
      } else {
        return this.moviesService.fetchMovieByTitle(title).pipe(first());
      }
    }
  }

  private isMovieType(object: any): object is Movie {
    return "id" in object && "title" in object && "image" in object;
  }
}
