import { Routes } from "@angular/router";
import { StoreComponent } from "./components/store/store.component";
import { GameDetailsComponent } from "./components/game-details/game-details.component";
import { ShoppingcartComponent } from "./components/shoppingcart/shoppingcart.component";

export const gameRoutes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'store/:gameId',
    component: GameDetailsComponent
  },
  {
    path: 'cart',
    component: ShoppingcartComponent
  },
]
