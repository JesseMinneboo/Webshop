import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/loginModal/login.component';
import { RegisterComponent } from './shared/registerModal/register.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { WarningModalComponent } from './shared/warning-modal/warning-modal.component';
import { AdminComponent } from './pages/admin/admin.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'admin', component: AdminComponent }
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StoreComponent,
    ShoppingcartComponent,
    WarningModalComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
