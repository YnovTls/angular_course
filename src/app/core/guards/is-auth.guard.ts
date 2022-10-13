import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: "root",
})
export class IsAuthGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) {}

  public async canLoad(): Promise<boolean> {
    const isAuth = await this.authService.isAuthenticated();

    if (isAuth) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
