import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserLayoutComponent } from "./user-layout.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserLayoutComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [UserLayoutComponent],
})
export class UserLayoutModule {}
