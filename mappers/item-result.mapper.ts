import { config } from "../config";
import { conditionTranslations } from "../helpers";
import { categoriesInterface } from "../interfaces/categories.interfaces";
import { itemDescription } from "../interfaces/item-description.interfaces";
import { ItemMinified, ProductCondition } from "../interfaces/item-minified.interfaces";
import { Result } from "../interfaces/search.interfaces";
import { mapPrice } from "./item-results.mapper";

export const itemMapper = (result: Result, descriptionContent: itemDescription, categories: categoriesInterface): ItemMinified => {
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
        condition: translateProductCondition(result.condition),
        free_shipping: result.shipping?.free_shipping || false,
        sold_quantity: result.sold_quantity,
        description: descriptionContent.plain_text,
        categories: categoriesMapper(categories)
    }
  };
};

const categoriesMapper = (categories: categoriesInterface):string[] => {
  const { path_from_root } = categories
  return path_from_root.map(category => category.name);

}

function translateProductCondition(condition: ProductCondition): string {
  const translation = conditionTranslations[condition];
  if (!translation) {
      throw new Error("Condición de producto no válida");
  }
  return translation;
}