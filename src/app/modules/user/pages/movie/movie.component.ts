import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoaderService } from "src/app/core/services/loader.service";
import { Movie } from "../../models/movie.interface";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
  public movie: Movie | undefined = undefined;

  constructor(private route: ActivatedRoute, private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (typeof data === "object" && data["movie"] !== undefined) {
        this.movie = data["movie"];
        this.loaderService.deleteLoaderById("MOVIES_RESOLVER_ID");
      }
    });
  }
}
