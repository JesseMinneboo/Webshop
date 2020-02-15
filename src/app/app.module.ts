import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { ProductModule } from './modules/store/product.module';
import { SharedModule } from './modules/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserModule } from "./modules/user/user.module";
import {ToastrModule, ToastrService} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  exports: [
    HttpClientModule
  ],

  imports: [
    BrowserModule,
    RouterModule,
    UserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AuthModule,
    AdminModule,
    ProductModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: false
    })
  ],

  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
