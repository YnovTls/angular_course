import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Error } from "../models/error.interface";

@Injectable({
  providedIn: "root",
})
export class ErrorService {
  private errors: BehaviorSubject<Error[]> = new BehaviorSubject<Error[]>([]);

  constructor() {}

  public addError(error: Error): void {
    this.errors.next([...this.errors.value, error]);
  }

  public getErrors(): Observable<Error[]> {
    return this.errors.asObservable();
  }

  public generateId(): number {
    return this.errors.value.length + 1;
  }
}
