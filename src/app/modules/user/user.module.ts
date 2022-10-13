import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { MoviesComponent } from "./pages/movies/movies.component";
import { MovieComponent } from "./pages/movie/movie.component";
import { OldPageComponent } from "./pages/old-page/old-page.component";
import { ChildComponent } from "./pages/old-page/child/child.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "./directives/highlight.directive";
import { SpinnerComponent } from "./components/spinner/spinner.component";

@NgModule({
  declarations: [MoviesComponent, MovieComponent, OldPageComponent, ChildComponent, HighlightDirective, SpinnerComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, RouterModule],
})
export class UserModule {}
