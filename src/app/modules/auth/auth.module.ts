import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {MDBBootstrapModule, MDBRootModule} from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],

  imports: [
    CommonModule,
    MDBBootstrapModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ],

  exports: [
    LoginComponent,
    RegisterComponent
  ],

  entryComponents: [
    LoginComponent
  ],

  providers: [
    AuthService,
    MDBRootModule,
    CommonModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})

export class AuthModule {}
