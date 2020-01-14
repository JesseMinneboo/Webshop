import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { AdminComponent } from './pages/admin/admin.component';
import {HttpClientModule} from "@angular/common/http";
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { GameDetailsComponent } from './pages/store/game-details/game-details.component';
import { GameCardComponent } from './shared/game-card/game-card.component';
import { AddComponent } from './pages/admin/add/add.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'store/:gameId', component: GameDetailsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add', component: AddComponent },

  { path: '**', component: PagenotfoundComponent},
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
    AdminComponent,
    PagenotfoundComponent,
    GameDetailsComponent,
    GameCardComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass:HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
