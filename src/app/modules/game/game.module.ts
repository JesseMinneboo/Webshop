import { NgModule } from "@angular/core";
import { GameCardComponent } from "../shared/components/game-card/game-card.component";
import { ShoppingcartComponent } from "./pages/shoppingcart/shoppingcart.component";
import { StoreComponent } from "./pages/store/store.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {MDBBootstrapModule, MDBRootModule} from "angular-bootstrap-md";
import { gameRoutes } from "./game.routes";
import {GameDetailsComponent} from "./pages/game-details/game-details.component";
import {FormsModule} from "@angular/forms";
import { CheckoutComponent } from './pages/checkout/checkout.component';


@NgModule({
  declarations: [
    GameCardComponent,
    ShoppingcartComponent,
    StoreComponent,
    GameDetailsComponent,
    CheckoutComponent
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
