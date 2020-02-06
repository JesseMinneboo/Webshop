import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../store/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../../store/models/product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  game: Product = new Product();
  currentGameId: number;
  isLoading = false;
  error: string = null;
  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GameService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [''],
      description: [],
      imagePath: [''],
      price: [''],
    });

    this.activatedRoute.params.subscribe((data: Params) => {
      this.gameService.getGameById(data.gameId).subscribe(response => {
        this.game = response;
        this.currentGameId = response.id;

        this.form.get('title').setValue(this.game.name);
        this.form.get('description').setValue(this.game.description);
        this.form.get('imagePath').setValue(this.game.imagePath);
        this.form.get('price').setValue(this.game.price);
      });
    });
  }

  onEditGame = async (form: FormGroup): Promise<void> => {
    this.isLoading = true;
    const name = form.value.title;
    const imagePath = form.value.imagePath;
    const description = form.value.description;
    const price = form.value.price;

    await this.gameService.editGame(this.currentGameId, name, description, price, imagePath);
    this.isLoading = false;
    await this.router.navigateByUrl('home');
  }
}
