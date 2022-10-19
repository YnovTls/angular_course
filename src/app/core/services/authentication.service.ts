import { Injectable } from "@angular/core";
import { FirebaseError } from "@angular/fire/app";
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  UserCredential,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "@angular/fire/auth";
import { EMPTY, Observable, of } from "rxjs";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public user: Observable<User | null> = EMPTY;

  constructor(private readonly auth: Auth, private readonly errorService: ErrorService) {
    if (this.auth) {
      this.user = authState(this.auth);
      onAuthStateChanged(
        this.auth,
        (user: User | null) => {
          this.user = of(user);
          console.log("USER : ", user);
        },
        (error: Error) => {
          console.log("ERROR : ", error);
        }
      );
    }
  }

  public async signIn(email: string, password: string): Promise<UserCredential | null> {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        this.errorService.addError({ id: this.errorService.generateId(), date: new Date(), message: error.message, stacktrace: error.stack });
      } else {
        console.log(error);
        this.errorService.addError({ id: this.errorService.generateId(), date: new Date(), message: JSON.stringify(error) });
      }

      return null;
    }
  }

  public async signUp(email: string, password: string, firstname: string, lastname: string): Promise<UserCredential | null> {
    try {
      const data: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const displayName: string = `${lastname.toLocaleUpperCase()} ${firstname}`;

      await updateProfile(data.user, { displayName });

      return data;
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.errorService.addError({ id: this.errorService.generateId(), date: new Date(), message: error.message, stacktrace: error.stack });
      } else {
        console.log(error);
        this.errorService.addError({ id: this.errorService.generateId(), date: new Date(), message: JSON.stringify(error) });
      }

      return null;
    }
  }

  /**
   * This method is called to allow user to sign out
   */
  public async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.errorService.addError({ id: this.errorService.generateId(), date: new Date(), message: error.message, stacktrace: error.stack });
      } else {
        console.log(error);
        this.errorService.addError({ id: this.errorService.generateId(), date: new Date(), message: JSON.stringify(error) });
      }
    }
  }
}
