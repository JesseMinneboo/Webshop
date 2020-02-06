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
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AuthModule,
    AdminModule,
    ProductModule,
    SharedModule,
    HttpClientModule,
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
