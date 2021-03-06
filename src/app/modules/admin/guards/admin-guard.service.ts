import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService,
              public router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isAdmin) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
