import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameService } from "../../../store/services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private gameService: GameService,
              private router: Router) { }

  ngOnInit() {
  }

  onAddGame = async(form: NgForm): Promise<void> => {
    this.isLoading = true;
    const name = form.value.title;
    const imagePath = form.value.image;
    const description = form.value.description;
    const price = form.value.price;

    if (price >= 0 && price < 1000) {
      await this.gameService.addGame(name, description, price, imagePath);
      form.reset();
      this.isLoading = false;
      await this.router.navigateByUrl('/admin')
    } else {
      this.error = 'Please enter a number between 0 and 1000'
      this.isLoading = false;
    }

  }
}