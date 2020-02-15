import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/services/api.service";
import { HttpParams } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { of } from "rxjs";
import {IProduct} from "../../store/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly PREFIX = '/user';

  constructor(private api: ApiService) {
  }

  deleteUser(userId: number): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.api.delete({
        auth: true,
        body: new HttpParams()
          .set("user_id", String(userId)),
        endpoint: this.PREFIX + "/delete/" + userId
      })
        .pipe(
          catchError((error) => {
            return of(console.log(error));
          })
        ).subscribe()
    });
  }


  updateUser(id: number, name: string, surname: string, email: string, password: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.api.post({
        auth: true,
        body: new HttpParams()
          .set("name", name)
          .set("surname", surname)
          .set("email", email)
          .set("password", password),
        endpoint: this.PREFIX + "/update/" + id
      })
        .pipe(
        catchError((error) => of(console.log("ERROR:" + error.message)))
      ).subscribe(() => {
        resolve();
      })
    });
  }

  updateAvatar(id: number, avatarUrl: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.api.post({
        auth: true,
        body: new HttpParams()
          .set("avatar_url", avatarUrl)
          .set("user_id", String(id)),
        endpoint: this.PREFIX + "/update/avatar"
      })
        .pipe(
          catchError((error) => of(console.log("ERROR:" + error.message)))
        ).subscribe(() => {
        resolve();
      })
    });
}

}
