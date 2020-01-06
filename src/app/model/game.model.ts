export class Game {
public title: string;
public description: string;
public price: number;
public imagePath: string;

  constructor(title: string, description: string, price: number, imagePath: string) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
  }

}

export interface GameInterface {
  title: string;
  description: string;
  price: number;
  imagePath: string;
}
