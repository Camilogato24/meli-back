import { Item, Price } from "../interfaces/minified.interfaces";
import { Result } from "../interfaces/search.interfaces";

export const itemMapper = (results: Result[]): Item[] => {
  return results.map((result) => ({
    id: result.id,
    title: result.title,
    price: mapPrice(result.price),
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping?.free_shipping || false,
  }));
};

const mapPrice = (price: number): Price => {
  return {
    amount: price,
    currency: "ARS",
    decimals: 0,
  };
};
