import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IsAuthGuard } from "./core/guards/is-auth.guard";
import { GuestLayoutComponent } from "./layouts/guest-layout/guest-layout.component";
import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";

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
    canLoad: [IsAuthGuard],
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
