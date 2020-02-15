import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    if (this.isAuthTokenSet()) {
      const authToken = this.auth.getAuthToken();

      const authReq = req.clone({ setHeaders: { Authorization: authToken } });

      return next.handle(authReq);
    }

    return next.handle(req);
  }

  isAuthTokenSet() {
    return this.auth.getAuthToken() !== '';
  }
}
