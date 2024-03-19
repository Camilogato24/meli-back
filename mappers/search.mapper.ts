import { config } from "../config";
import { SearchMinified } from "../interfaces/minified.interfaces";
import { SearchBig } from "../interfaces/search.interfaces";
import {
  getCategoriesMost,
  getCategoryPath,
  hasFilters,
} from "./category-search.mapper";
import { itemsMapper } from "./item-results.mapper";

export const searchMapper = (searchBig: SearchBig): SearchMinified => {
  const { available_filters, filters } = searchBig;
  const categories = hasFilters(available_filters)
    ? getCategoriesMost(available_filters)
    : getCategoryPath(filters);
  const minifiedItems: SearchMinified = {
    author: {
      name: config.NOMBRE,
      lastname: config.APELLIDO,
    },
    categories: categories,
    items: itemsMapper(searchBig.results).slice(0, 4),
  };
  return minifiedItems;
};
