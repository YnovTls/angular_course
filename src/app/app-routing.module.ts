import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuestLayoutComponent } from "./layouts/guest-layout/guest-layout.component";
import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";
import { NotFoundComponent } from "./modules/guest/pages/not-found/not-found.component";

const routes: Routes = [
  {
    component: GuestLayoutComponent,
    path: "",
    loadChildren: () => import("./modules/guest/guest.module").then((module) => module.GuestModule),
  },
  {
    component: UserLayoutComponent,
    path: "user",
    loadChildren: () => import("./modules/user/user.module").then((module) => module.UserModule),
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
