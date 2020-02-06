export class Product {
public id: number;
public name: string;
public description: string;
public price: number;
public imagePath: string;

}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
}
