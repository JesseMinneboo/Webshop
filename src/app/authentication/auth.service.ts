import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {IUser, User} from './user.model';
import {LocalStorageService} from '../services/cookies/localstorage.service';

@Injectable({providedIn: 'root'})
export class AuthService {
  authUser: User = null;
  authToken: string;
  setAuthenticated = false;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.authToken = '';
  }

  registerUser(data: IUser) {
    let body = new URLSearchParams();
    body.set('email', data.email);
    body.set('name', data.name);
    body.set('surname', data.surname);
    body.set('password', data.password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post<User>('http://localhost:9000/api/user/register', body.toString(), options);
  }

  loginUser(data: {email: string, password: string}) {
    let body = new URLSearchParams();
    body.set('email', data.email);
    body.set('password', data.password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post<User>('http://localhost:9000/api/user/login', body.toString(), options);
  }

  setAuthUser(user: User) {
    this.authUser = user;
    this.localStorageService.setLocal('user', user);
    this.setAuthenticated = true;
  }

  getAuthUser() {
    return this.authUser;
  }

  deleteCurrentUser() {
    this.authUser = null
    this.localStorageService.removeLocal('user');
    this.setAuthenticated = false;
  }

  setAuthToken(token: string){
    this.authToken = token;
  }

  getAuthToken() {
    return this.authToken;
  }

}
