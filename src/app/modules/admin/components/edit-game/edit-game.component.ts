import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../game/services/game.service";
import {NgForm} from "@angular/forms";
import {Game} from "../../../../models/game.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  game: Game = new Game();
  currentGameId: number;
  isLoading = false;
  error: string = null;

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GameService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.gameService.getGameById(data.gameId).subscribe(response => {
        this.game = response;
        this.currentGameId = response.id;
      });
    });
  }


  onEditGame = async(form: NgForm): Promise<void> => {
    this.isLoading = true;
    const name = form.value.title;
    const imagePath = form.value.image;
    const description = form.value.description;
    const price = form.value.price;

    await this.gameService.editGame(this.currentGameId, name, description, price, imagePath);
    this.isLoading = false;
  }
}
