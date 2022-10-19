import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EMAIL_REGEX, PASSWORD_REGEX } from "src/app/core/constants/regex.constants";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent {
  public email: string = "";
  public password: string = "";
  public confirmPassword: string = "";
  public firstname: string = "";
  public lastname: string = "";
  public errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  public async signUp(): Promise<void> {
    try {
      await this.authenticationService.signUp(this.email, this.password, this.firstname, this.lastname);
      this.router.navigateByUrl("/login");
    } catch (error) {
      this.errorMessage = "Form invalid !";
    }
  }

  public isFormValid(): boolean {
    let result: boolean = true;

    if (this.firstname.length < 3 || this.lastname.length < 3) {
      result = false;
    }

    if (!EMAIL_REGEX.test(this.email) || !PASSWORD_REGEX.test(this.password)) {
      result = false;
    }

    if (this.password !== this.confirmPassword) {
      result = false;
    }

    return result;
  }
}
