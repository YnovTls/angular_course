import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoaderService } from "src/app/core/services/loader.service";
import { Movie } from "../../models/movie.interface";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (typeof data === "object" && data["movies"] !== undefined) {
        this.movies = data["movies"];
        this.loaderService.deleteLoaderById("MOVIES_RESOLVER_ID");
      }
    });
  }

  public openMovie(movie: Movie): void {
    this.router.navigateByUrl(`/user/movies/${movie.title}`, { state: { movie } });
  }
}
