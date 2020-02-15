import { NgModule } from "@angular/core";
import { ProductCardComponent } from "../shared/components/product-card/product-card.component";
import { ShoppingCartComponent } from "./pages/shoppingcart/shopping-cart.component";
import { StoreComponent } from "./pages/store/store.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MDBBootstrapModule, MDBRootModule } from "angular-bootstrap-md";
import { productRoutes } from "./product.routes";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { FormsModule } from "@angular/forms";
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ShoppingCartComponent,
    StoreComponent,
    ProductDetailsComponent,
    CheckoutComponent
  ],

  exports: [
    ProductCardComponent
  ],

  imports: [
    RouterModule.forChild(productRoutes),
    CommonModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [
    CommonModule,
    MDBRootModule,
  ]
})

export class ProductModule {}
