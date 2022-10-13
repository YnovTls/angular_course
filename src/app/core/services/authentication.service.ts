import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private authState: boolean = false;

  constructor() {}

  public isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      this.authState = this.getAuthStateInStorage();
      resolve(this.authState);
    });
  }

  public login(username: string, password: string): boolean {
    this.setAuthStateInStorage(username === "toto" && password === "123456");
    return username === "toto" && password === "123456";
  }

  private setAuthStateInStorage(state: boolean): void {
    localStorage.setItem("authState", state ? "CONNECTED" : "");
  }

  private getAuthStateInStorage(): boolean {
    const state: null | string = localStorage.getItem("authState");

    return state === "CONNECTED";
  }
}
