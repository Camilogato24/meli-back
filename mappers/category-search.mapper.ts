import { Filter } from "../interfaces/search.interfaces";

export const categorySearch = (filters: Filter[]): string[] => {
    const itemsCategory = filters.find(filter => filter.id === 'category');
    if (itemsCategory && itemsCategory.values && itemsCategory.values.length > 0) {
        return itemsCategory.values[0].path_from_root.map(category => category.name);
    } else {
        return [];
    }
}
