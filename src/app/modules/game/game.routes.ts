import { Routes } from "@angular/router";
import { StoreComponent } from "./pages/store/store.component";
import { GameDetailsComponent } from "./pages/game-details/game-details.component";
import { ShoppingCartComponent } from "./pages/shoppingcart/shopping-cart.component";
import { AuthGuardService as AuthGuard } from "../auth/guards/auth-guard.service";
import { CheckoutComponent } from "./pages/checkout/checkout.component";

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
    component: ShoppingCartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  }
];
