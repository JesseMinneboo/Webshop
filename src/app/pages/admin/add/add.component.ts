import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {GameInterface} from "../../../model/game.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onCreateGame(postData: GameInterface) {
    this.http.post<GameInterface>('http://localhost:9000/api/game/add', postData )
      .subscribe(responseData => {
        console.log(responseData)
      })
  }

  goToHome() {
    this.router.navigateByUrl('/home')
  }

  goToAdmin() {
    this.router.navigateByUrl('/admin')
  }
}
