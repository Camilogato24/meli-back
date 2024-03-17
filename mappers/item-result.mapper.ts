import { config } from "../config";
import { itemDescription } from "../interfaces/item-description.interfaces";
import { ItemMinified } from "../interfaces/item-minified.interfaces";
import { Result } from "../interfaces/search.interfaces";
import { mapPrice } from "./item-results.mapper";

export const itemMapper = (result: Result, descriptionContent: itemDescription): ItemMinified => {
  return {
    author: {
      name: config.NOMBRE,
      lastname: config.APELLIDO,
    },
    item: {
        id: result.id,
        title: result.title,
        price: mapPrice(result.price),
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping?.free_shipping || false,
        sold_quantity: result.sold_quantity,
        description: descriptionContent.plain_text
    }
  };
};
