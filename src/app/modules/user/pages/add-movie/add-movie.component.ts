import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoaderService } from "src/app/core/services/loader.service";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"],
})
export class AddMovieComponent implements OnInit {
  public title: string = "";
  public fileName: string = "";
  public file: File | undefined;

  constructor(private loaderService: LoaderService, private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {}

  public async submit(): Promise<void> {
    if (this.file) {
      const loaderId = this.loaderService.addLoader({ isMessageDisplayed: true, message: "Upload in progress...", state: true });
      try {
        const result = await this.moviesService.uploadMovieImage(this.file.name, this.file);
        await this.moviesService.addNewMovie({ id: "", title: this.title, image: result.ref.name });
        this.loaderService.deleteLoaderById(loaderId);
        this.router.navigateByUrl(`/user/movies/${this.title}`);
      } catch (error) {
        console.log(error);
        this.loaderService.deleteLoaderById(loaderId);
      }
    }
  }

  public onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  public onTitleChanged(): void {
    this.fileName = this.title.toLowerCase();
  }
}
