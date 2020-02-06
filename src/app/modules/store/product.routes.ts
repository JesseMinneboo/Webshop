import { Routes } from "@angular/router";
import { StoreComponent } from "./pages/store/store.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { ShoppingCartComponent } from "./pages/shoppingcart/shopping-cart.component";
import { AuthGuardService as AuthGuard } from "../auth/guards/auth-guard.service";
import { CheckoutComponent } from "./pages/checkout/checkout.component";

export const productRoutes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'store/:gameId',
    component: ProductDetailsComponent
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
