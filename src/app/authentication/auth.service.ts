import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {IUser, User} from './user.model';
import {LocalStorageService} from '../services/cookies/localstorage.service';

@Injectable({providedIn: 'root'})
export class AuthService {
  currentUser: User = null;
  isLoggedIn = false;

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
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

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.localStorageService.setLocal('user', user);
    this.isLoggedIn = true;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  deleteCurrentUser() {
    this.currentUser = null
    this.localStorageService.removeLocal('user');
    this.isLoggedIn = false;
  }
}
