import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Movie } from "../../models/movie.interface";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
  public movie: Movie | undefined = undefined;

  constructor(private router: Router, private route: ActivatedRoute, private moviesService: MoviesService) {
    if (this.router.getCurrentNavigation()?.extras && this.router.getCurrentNavigation()?.extras.state?.["movie"]) {
      this.movie = this.router.getCurrentNavigation()?.extras.state?.["movie"];
    }
  }

  ngOnInit(): void {
    const title: string | null = this.route.snapshot.paramMap.get("title");
    if (title) {
      this.getMovie(title);
    } else {
      this.router.navigateByUrl("/user/movies");
    }
  }

  private getMovie(title: string): void {
    this.moviesService.fetchMovieByTitle(title).subscribe((movie) => {
      if (movie) {
        this.movie = movie;
      } else {
        this.router.navigateByUrl("/user/movies");
      }
    });
  }
}
