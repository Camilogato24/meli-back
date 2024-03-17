import { config } from "../config";
import { SearchMinified } from "../interfaces/minified.interfaces";
import { SearchBig } from "../interfaces/search.interfaces";
import { categorySearch } from "./category-search.mapper";
import { itemMapper } from "./item-results.mapper";

export const searchMapper = (searchBig: SearchBig): SearchMinified => {
    const minifiedItems: SearchMinified = {
        author: {
            name: config.NOMBRE,
            lastname: config.APELLIDO
        },
        categories: categorySearch(searchBig.filters),
        items: itemMapper(searchBig.results).slice(0, 4)
    }
    return minifiedItems;
}