import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Movie } from "../../models/movie.interface";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent {
  public movies: Movie[] = [];

  constructor(private router: Router, private moviesService: MoviesService) {
    this.moviesService.fetchMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  public openMovie(movie: Movie): void {
    this.router.navigateByUrl(`/user/movies/${movie.title}`, { state: { movie } });
  }
}
