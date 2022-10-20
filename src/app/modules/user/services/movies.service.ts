import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { AggregateField, AggregateQuerySnapshot, collection, CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";
import { Observable } from "rxjs";
import { GenericFirestoreService } from "src/app/core/services/generic-firestore.service";
import { FIREBASE_COLLECTION_PATHS } from "../constants/firestore-collection-paths.constant";
import { Movie } from "../models/movie.interface";
import { v4 as uuidv4 } from "uuid";
import { GenericStorageService } from "./generic-storage.service";
import { UploadMetadata, UploadResult } from "firebase/storage";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private moviesCollection: CollectionReference<DocumentData>;

  constructor(
    private readonly firestore: Firestore,
    private readonly genericFirestoreService: GenericFirestoreService,
    private readonly genericStorageService: GenericStorageService
  ) {
    this.moviesCollection = collection(this.firestore, FIREBASE_COLLECTION_PATHS.MOVIES);
  }

  public async countMovies(): Promise<AggregateQuerySnapshot<{ count: AggregateField<number> }>> {
    return await this.genericFirestoreService.count(this.moviesCollection);
  }

  public fetchMovies(direction: "asc" | "desc" = "asc"): Observable<Movie[]> {
    return this.genericFirestoreService.fetchAll<Movie>(this.moviesCollection, "title", direction);
  }

  public fetchMovieByTitle(title: string): Observable<Movie[]> {
    return this.genericFirestoreService.fetchByProperty<Movie>(this.moviesCollection, "title", title, 1);
  }

  public fetchMovieById(id: string): Observable<Movie> {
    return this.genericFirestoreService.fetchById<Movie>(FIREBASE_COLLECTION_PATHS.MOVIES, id);
  }

  public fetchMoviesByPagination(startAfterMovieName: string, maxResult: number = 30, direction: "asc" | "desc" = "asc") {
    return this.genericFirestoreService.fetchByPagination<Movie>(this.moviesCollection, "name", startAfterMovieName, maxResult, direction) as Observable<
      Movie[]
    >;
  }

  public addNewMovie(movie: Movie): Promise<DocumentReference<DocumentData>> {
    movie.id = uuidv4();
    return this.genericFirestoreService.create(this.moviesCollection, movie);
  }

  public updateMovie(movie: Movie): Promise<void> {
    return this.genericFirestoreService.update(FIREBASE_COLLECTION_PATHS.MOVIES, movie);
  }

  public deleteMovie(id: string) {
    return this.genericFirestoreService.delete(FIREBASE_COLLECTION_PATHS.MOVIES, id);
  }

  public fetchMovieImage(fileName: string): Promise<string> {
    return this.genericStorageService.getFileDownloadUrl(`movies/${fileName}`);
  }

  public uploadMovieImage(fileName: string, file: File): Promise<UploadResult> {
    const metadata: UploadMetadata = {};

    return this.genericStorageService.uploadFile(file, `movies/${fileName}`, metadata);
  }
}
