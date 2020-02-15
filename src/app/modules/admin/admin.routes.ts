import { Routes } from "@angular/router";
import { AdminComponent } from "./pages/admin-panel/admin.component";
import { AddComponent } from "./pages/add-product/add.component";
import { AuthGuardService as AuthGuard } from "../auth/guards/auth-guard.service";
import { AdminGuardService as AdminGuard } from "./guards/admin-guard.service";
import { EditGameComponent } from "./pages/edit-product/edit-game.component";

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/add-product',
    component: AddComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'admin/edit-product/:productId',
    component: EditGameComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
];
