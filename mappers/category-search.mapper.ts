import { Filter } from "../interfaces/search.interfaces";

export const categorySearch = (filters: Filter[]) : string[] => {
    const itemsCategory = filters.find(filter => filter.id === 'category');
    return itemsCategory?.values?.map(category => category.name) ?? [];
}