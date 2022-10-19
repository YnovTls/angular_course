import { NgModule } from "@angular/core";

import { GuestRoutingModule } from "./guest-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [LoginComponent, NotFoundComponent, SignUpComponent],
  imports: [SharedModule, GuestRoutingModule],
})
export class GuestModule {}
