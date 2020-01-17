import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.authService.getAuthUser().isAdmin()) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
