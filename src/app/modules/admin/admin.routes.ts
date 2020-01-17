import {Routes} from "@angular/router";
import {AdminComponent} from "./components/admin-panel/admin.component";
import {AddComponent} from "./components/add-game/add.component";
import {AuthGuardService as AuthGuard} from "../auth/guards/auth-guard.service";
import {AdminGuardService as AdminGuard} from "../auth/guards/admin-guard.service";

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/add-game',
    component: AddComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
]
