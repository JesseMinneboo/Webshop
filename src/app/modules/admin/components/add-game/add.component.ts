import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {GameService} from "../../../game/services/game.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onAddGame(form: NgForm) {
    this.isLoading = true;
    const name = form.value.title;
    const imagePath = form.value.image;
    const description = form.value.description;
    const price = form.value.price;

    this.gameService.addGame(name, description, price, imagePath).subscribe();
  }
}
