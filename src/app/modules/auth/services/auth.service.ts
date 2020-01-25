import { Injectable } from "@angular/core";
import {HttpParams} from "@angular/common/http";
import {IUser, User} from '../models/user.model';
import {LocalStorageService} from '../../shared/services/localstorage.service';
import {catchError, retry, tap} from "rxjs/operators";
import {of} from "rxjs";
import {ApiService} from "../../shared/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly PREFIX = '/user';

  public isAuthenticated = false;
  private authUser: User;
  private authToken: string;

  constructor(private localStorageService: LocalStorageService, private api: ApiService) {
    this.authToken = '';
  }

  login(email: string, password: string) {
    return new Promise((resolve) => {
      this.api.post({
        body: new HttpParams()
          .set('email', email)
          .set('password', password),
        endpoint: this.PREFIX + '/login'
      })
        .pipe(
          retry(2),
          catchError(() => of(this.setAuthenticated(false)))
        ).subscribe((user: IUser) => {
        this.setAuthUser(new User(user));

        this.setAuthToken(
          this.getAuthUser().jwt
        );

        this.setAuthenticated(true);

        resolve();
      });
    });
  }

  register(email: string, name: string, surname: string, password: string) {
    return new Promise((resolve) => {
      this.api.post({
        body: new HttpParams()
          .set('email', email)
          .set('name', name)
          .set('surname', surname)
          .set('password', password)
          .set('role', 'USER'),
        endpoint: this.PREFIX + '/register'
      })
        .pipe(
          tap(data => console.log(data)),
          retry(2),
          catchError(() => of(this.setAuthenticated(false)))
        ).subscribe((user: IUser) => {
        resolve();
      });
    });
  }

  logOutUser() {
    this.authUser = null;
    this.isAuthenticated = false;
    this.authToken = null;
    location.reload();
  }

  setAuthenticated(to: boolean) {
    this.isAuthenticated = to;
  }

  setAuthUser(user: User) {
    this.authUser = user;
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

}
