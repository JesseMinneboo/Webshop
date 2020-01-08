import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { WarningModalComponent } from './shared/warning-modal/warning-modal.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AddComponent } from './pages/admin/add/add.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { RemoveComponent } from './pages/admin/remove/remove.component';
import {HttpClientModule} from "@angular/common/http";
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { ResultsremoveComponent } from './pages/admin/remove/resultsremove/resultsremove.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add', component: AddComponent },
  { path: 'admin/edit', component: EditComponent },
  { path: 'admin/remove', component: RemoveComponent },
  { path: 'admin/remove/result', component: ResultsremoveComponent },
  { path: '**', component: PagenotfoundComponent}
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
    AddComponent,
    EditComponent,
    RemoveComponent,
    PagenotfoundComponent,
    ResultsremoveComponent,
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
