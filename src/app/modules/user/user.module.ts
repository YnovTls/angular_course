import { NgModule } from "@angular/core";

import { UserRoutingModule } from "./user-routing.module";
import { MoviesComponent } from "./pages/movies/movies.component";
import { MovieComponent } from "./pages/movie/movie.component";
import { OldPageComponent } from "./pages/old-page/old-page.component";
import { ChildComponent } from "./pages/old-page/child/child.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { SharedModule } from "src/app/shared/shared.module";
import { AddMovieComponent } from './pages/add-movie/add-movie.component';

@NgModule({
  declarations: [MoviesComponent, MovieComponent, OldPageComponent, ChildComponent, HighlightDirective, AddMovieComponent],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}
