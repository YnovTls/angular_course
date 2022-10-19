import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GuestRoutingModule } from "./guest-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { FormsModule } from "@angular/forms";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

@NgModule({
  declarations: [LoginComponent, NotFoundComponent, SignUpComponent],
  imports: [CommonModule, GuestRoutingModule, FormsModule],
})
export class GuestModule {}
