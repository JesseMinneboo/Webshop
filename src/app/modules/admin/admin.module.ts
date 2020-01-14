import {NgModule} from "@angular/core";
import {AdminComponent} from "./components/admin-panel/admin.component";
import {AddComponent} from "./components/add-game/add.component";
import {FormsModule} from "@angular/forms";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {adminRoutes} from "./admin.routes";

@NgModule({
  declarations: [
    AdminComponent,
    AddComponent
  ],

  exports: [],

  entryComponents: [],

  providers: [],
  imports: [
    FormsModule,
    MDBBootstrapModule,
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})

export class AdminModule {}
