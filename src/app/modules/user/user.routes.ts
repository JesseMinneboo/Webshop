import { Routes } from "@angular/router";
import { AuthGuardService as AuthGuard } from "../auth/guards/auth-guard.service";
import { AccountPageComponent } from "./pages/account-page/account-page.component";

export const userRoutes: Routes = [
  {
    path: 'account',
    component: AccountPageComponent,
    canActivate: [AuthGuard]
  }
];
