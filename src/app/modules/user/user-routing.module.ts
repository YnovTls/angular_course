import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OldPageComponent } from "./pages/old-page/old-page.component";
import { MovieComponent } from "./pages/movie/movie.component";
import { MoviesComponent } from "./pages/movies/movies.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "movies",
    pathMatch: "full",
  },
  {
    path: "",
    children: [
      {
        path: "old",
        component: OldPageComponent,
      },
      {
        path: "movies",
        component: MoviesComponent,
      },
      {
        path: "movies/:title",
        component: MovieComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
