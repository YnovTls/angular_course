import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieComponent } from "./movie/movie.component";
import { MoviesComponent } from "./movies/movies.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OldPageComponent } from "./old-page/old-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "movies",
    pathMatch: "full",
  },
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
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
