import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Movie } from "../movies/movies.component";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent {
  public movie: Movie | undefined = undefined;

  constructor(private router: Router) {
    console.log("toto");

    if (this.router.getCurrentNavigation()?.extras && this.router.getCurrentNavigation()?.extras.state?.["movie"]) {
      this.movie = this.router.getCurrentNavigation()?.extras.state?.["movie"];
    } else {
      this.router.navigateByUrl("/user/movies");
    }
  }
}
