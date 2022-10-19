import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoaderService } from "src/app/core/services/loader.service";
import { ToastService } from "src/app/core/services/toast.service";
import { Movie } from "../../models/movie.interface";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
  public movie: Movie | undefined = undefined;

  constructor(private route: ActivatedRoute, private loaderService: LoaderService, private router: Router, private toastService: ToastService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (typeof data === "object" && data["movie"] !== undefined) {
        if (data["movie"].length === 0) {
          this.toastService.addToast({ type: "error", duration: 3000, message: "Movie Not found :(", button: "OK" });
          this.loaderService.deleteLoaderById("MOVIES_RESOLVER_ID");
          this.router.navigateByUrl("/user/movies");
        } else {
          this.movie = data["movie"][0];
          this.loaderService.deleteLoaderById("MOVIES_RESOLVER_ID");
        }
      }
    });
  }
}
