import { NgModule } from "@angular/core";
import { AdminComponent} from "./pages/admin-panel/admin.component";
import { AddComponent } from "./pages/add-game/add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { adminRoutes } from "./admin.routes";
import { EditGameComponent } from './pages/edit-game/edit-game.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddComponent,
    EditGameComponent
  ],

  exports: [],

  entryComponents: [],

  providers: [
  ],
    imports: [
        FormsModule,
        MDBBootstrapModule,
        CommonModule,
        RouterModule.forChild(adminRoutes),
        ReactiveFormsModule
    ]
})

export class AdminModule {}
