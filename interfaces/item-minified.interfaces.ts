import { Author, Price } from "./minified.interfaces";

export interface ItemMinified {
  author: Author;
  item: Item;
}
interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  categories: string[]
}
