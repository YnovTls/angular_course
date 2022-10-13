import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public username: string = "";
  public password: string = "";
  public errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  public login(): void {
    if (this.authenticationService.login(this.username, this.password)) {
      this.router.navigateByUrl("/user");
    } else {
      this.errorMessage = "Identifiants incorrectes !";
    }
  }
}
