import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuestLayoutComponent } from "./guest-layout.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [GuestLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [GuestLayoutComponent],
})
export class GuestLayoutModule {}
