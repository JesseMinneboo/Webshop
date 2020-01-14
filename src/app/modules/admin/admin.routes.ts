import {Routes} from "@angular/router";
import {AdminComponent} from "./components/admin-panel/admin.component";
import {AddComponent} from "./components/add-game/add.component";

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/add-game',
    component: AddComponent
  }
]
