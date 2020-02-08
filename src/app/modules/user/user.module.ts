import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MDBBootstrapModule, MDBRootModule } from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { userRoutes } from "./user.routes";
import { AccountPageComponent } from './pages/account-page/account-page.component';

@NgModule({
  declarations: [
    AccountPageComponent,
  ],

  exports: [],

  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule,
    FormsModule,
    MDBBootstrapModule,
    ReactiveFormsModule
  ],

  providers: [
    CommonModule,
    MDBRootModule,
  ]
})

export class UserModule {}
