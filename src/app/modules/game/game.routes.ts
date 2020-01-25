import { Routes } from "@angular/router";
import { StoreComponent } from "./pages/store/store.component";
import { GameDetailsComponent } from "./pages/game-details/game-details.component";
import { ShoppingcartComponent } from "./pages/shoppingcart/shoppingcart.component";
import {AuthGuardService as AuthGuard} from "../auth/guards/auth-guard.service";
import {CheckoutComponent} from "./pages/checkout/checkout.component";

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
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  }
]
