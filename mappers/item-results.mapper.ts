import { Item, Price } from "../interfaces/minified.interfaces";
import { Result } from "../interfaces/search.interfaces";

export const itemsMapper = (results: Result[]): Item[] => {
  return results.map((result) => ({
    id: result.id,
    title: result.title,
    price: mapPrice(result.price),
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping?.free_shipping || false,
  }));
};

export const mapPrice = (price: number): Price => {
  const fixPrice = Math.floor(price);
  const decimals = price - parseFloat(price.toFixed(0));
  const fixDecimals = parseFloat(decimals.toFixed(2)); 
  return {
    amount: fixPrice,
    currency: "ARS",
    decimals: fixDecimals,
  };
};
