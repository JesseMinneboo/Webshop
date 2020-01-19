import { Routes } from "@angular/router";
import { StoreComponent } from "./components/store/store.component";
import { GameDetailsComponent } from "./components/game-details/game-details.component";
import { ShoppingcartComponent } from "./components/shoppingcart/shoppingcart.component";
import {AuthGuardService as AuthGuard} from "../auth/guards/auth-guard.service";

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
    component: ShoppingcartComponent,
    canActivate: [AuthGuard]
  },
]
