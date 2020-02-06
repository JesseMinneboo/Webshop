import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { IUser, Role, User } from '../models/user.model';
import { LocalStorageService } from '../../shared/services/localstorage.service';
import { catchError, retry } from "rxjs/operators";
import { of } from "rxjs";
import { ApiService } from "../../shared/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'jwt-token';
  private readonly PREFIX = '/user';

  public isAuthenticated = false;
  public isAdmin = false;

  private authUser: User;
  private authToken: string;

  constructor(private api: ApiService, private localStorageService: LocalStorageService) {
    this.authToken = '';
  }

  tryTokenLogin(): Promise<boolean> {
    return new Promise(resolve => {
      if (this.isAuthenticated) {
        return resolve(true);
      }

      if (localStorage.getItem(this.TOKEN_KEY) !== null) {
        this.setAuthToken(localStorage.getItem(this.TOKEN_KEY));
        this.loginWithToken().then((isAuthenticated: boolean) => resolve(isAuthenticated));
      } else {
        resolve(false);
      }
    });
  }

  loginWithToken(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.api.post({
        auth: false,
        body: new HttpParams()
          .set('token', this.getAuthToken()),
        endpoint: this.PREFIX + '/login/token'
      })
        .pipe(
          retry(2),
          catchError(() => {
            this.removeToken();
            return of(this.setAuthenticated(false));
          })
        ).subscribe(
        (user: IUser) => {
          if (user === undefined) {
            this.removeToken();
            resolve(false);
            return;
          }

          if (user.name != null) {
            this.setAuthUser(new User(user));
            this.setAuthenticated(true);
            this.checkAndSetAdmin();
            this.localStorageService.setLocal(this.TOKEN_KEY, this.getAuthToken());

            resolve(true);
          }
        },
        () => {
          this.removeToken();
          resolve(false);
        });
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve) => {
      this.api.post({
        auth: false,
        body: new HttpParams()
          .set('email', email)
          .set('password', password),
        endpoint: this.PREFIX + '/login'
      })
        .pipe(
          retry(2),
          catchError(() => of(this.setAuthenticated(false)))
        ).subscribe((user: IUser) => {
        if (user.name != null) {
          this.setAuthUser(new User(user));

          this.setAuthToken(
            this.getAuthUser().jwt
          );

          localStorage.setItem(this.TOKEN_KEY, this.getAuthToken());

          this.setAuthenticated(true);
          this.checkAndSetAdmin();

          resolve();
        } else {
          resolve();
        }
      });
    });
  }

  register(email: string, password: string, name: string, surname: string) {
    return new Promise((resolve) => {
      this.api.post({
        auth: false,
        body: new HttpParams()
          .set('username', email)
          .set('password', password)
          .set('firstname', name)
          .set('lastname', surname)
          .set('role', 'USER'),
        endpoint: this.PREFIX + '/create'
      })
        .pipe(
          retry(2),
          catchError(() => of(this.setAuthenticated(false)))
        ).subscribe((user: IUser) => {
        resolve();
      });
    });
  }

  logout() {
    this.setAuthUser(null);
    this.setAuthenticated(false);
    this.checkAndSetAdmin();
    this.setAuthToken('');
    this.removeToken();
  }

  setAuthenticated(to: boolean) {
    this.isAuthenticated = to;
  }

  setAuthUser(user: User) {
    this.authUser = user;
  }

  checkAndSetAdmin() {
    if (this.getAuthUser() !== null) {
      this.isAdmin = this.getAuthUser().roles.find((role: Role) => role.role === 'ADMIN') !== undefined;
    } else {
      this.isAdmin = false;
    }
  }

  getAuthUser(): User {
    return this.authUser;
  }

  getAuthToken(): string {
    return this.authToken;
  }

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
