import { NgModule } from "@angular/core";
import { GameCardComponent } from "../shared/components/game-card/game-card.component";
import { ShoppingcartComponent } from "./components/shoppingcart/shoppingcart.component";
import { StoreComponent } from "./components/store/store.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {MDBBootstrapModule, MDBRootModule} from "angular-bootstrap-md";
import { gameRoutes } from "./game.routes";
import {GameDetailsComponent} from "./components/game-details/game-details.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GameCardComponent,
    ShoppingcartComponent,
    StoreComponent,
    GameDetailsComponent
  ],

  exports: [
    GameCardComponent
  ],

  imports: [
    RouterModule.forChild(gameRoutes),
    CommonModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [
    CommonModule,
    MDBRootModule,
  ]
})

export class GameModule {}
