import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { sharedRoutes } from "./shared.routes";
import { MDBBootstrapModule, MDBRootModule } from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./pages/pagenotfound/page-not-found.component";
import { ProductModule } from "../store/product.module";
import { HomeComponent } from "./pages/home/home.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],

  exports: [

  ],

  imports: [
    RouterModule.forRoot(sharedRoutes),
    CommonModule,
    MDBBootstrapModule.forRoot(),
    ProductModule,
    FormsModule
  ],

  entryComponents: [

  ],

  providers: [
    CommonModule,
    MDBRootModule
  ]
})

export class SharedModule {}
