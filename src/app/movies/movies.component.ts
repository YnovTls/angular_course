import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface Movie {
  title: string;
  image: string;
}

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent {
  public movies: Movie[] = [
    {
      title: "Interstellar",
      image: "https://fr.web.img5.acsta.net/c_310_420/pictures/14/09/24/12/08/158828.jpg",
    },
    {
      title: "TOP GUN: MAVERICK",
      image: "https://fr.web.img6.acsta.net/c_310_420/pictures/22/03/29/15/12/0827894.jpg",
    },
    {
      title: "La Ligne Verte",
      image: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg",
    },
  ];

  constructor(private router: Router) {}

  public openMovie(movie: Movie): void {
    this.router.navigateByUrl(`/movies/${movie.title}`, { state: { movie } });
  }
}
