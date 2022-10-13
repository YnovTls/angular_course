import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuestLayoutModule } from "./guest-layout/guest-layout.module";
import { UserLayoutModule } from "./user-layout/user-layout.module";

@NgModule({
  declarations: [],
  imports: [GuestLayoutModule, UserLayoutModule],
  exports: [GuestLayoutModule, UserLayoutModule],
})
export class LayoutsModule {}
