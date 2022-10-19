import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public email: string = "";
  public password: string = "";
  public errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  public async login(): Promise<void> {
    try {
      await this.authenticationService.signIn(this.email, this.password);
      this.router.navigateByUrl("/user");
    } catch (error) {
      this.errorMessage = "Bad Credentials !";
    }
  }
}
