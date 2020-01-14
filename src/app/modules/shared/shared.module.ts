import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { sharedRoutes } from "./shared.routes";
import {MDBBootstrapModule, MDBRootModule} from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { GameModule } from "../game/game.module";
import { HomeComponent } from "./components/home/home.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    PagenotfoundComponent
  ],

  exports: [

  ],

  imports: [
    RouterModule.forRoot(sharedRoutes),
    CommonModule,
    MDBBootstrapModule.forRoot(),
    GameModule,
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
