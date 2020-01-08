import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GameInterface} from "../../../../models/game.model";

@Component({
  selector: 'app-resultsremove',
  templateUrl: './resultsremove.component.html',
  styleUrls: ['./resultsremove.component.scss']
})
export class ResultsremoveComponent implements OnInit {
  gamesToRemove: GameInterface [] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.gamesToRemove.length)
  }

  goToHome() {
    this.router.navigateByUrl('/home')
  }

  goToAdmin() {
    this.router.navigateByUrl('/admin')
  }


  goToChooseGame() {
    this.router.navigateByUrl('/admin/remove')
  }
}
