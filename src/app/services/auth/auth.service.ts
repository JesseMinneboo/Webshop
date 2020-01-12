import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders,} from "@angular/common/http";
import { IUser } from "./user.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(data: IUser) {
    let body = new URLSearchParams();
    body.set('username', data.email);
    body.set('name', data.name);
    body.set('surname', data.surname);
    body.set('password', data.password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post('http://localhost:9000/api/user/register', body.toString(), options)
  }
}
