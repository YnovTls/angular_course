import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieComponent } from "./movie/movie.component";
import { OldPageComponent } from "./old-page/old-page.component";
import { ChildComponent } from "./old-page/child/child.component";

import { HighlightDirective } from "./highlight.directive";

@NgModule({
  declarations: [AppComponent, OldPageComponent, ChildComponent, HighlightDirective, NotFoundComponent, NavbarComponent, MoviesComponent, MovieComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
