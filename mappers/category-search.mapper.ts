import {
  Availablefilter,
  Filter,
  SearchBig,
} from "../interfaces/search.interfaces";

export const getCategoriesMost = (
  categories: Availablefilter[]
): string[] => {
  const categoryObject = categories.find(
    (categorie) => categorie.id == "category"
  );
  const maxResultsObject = categoryObject?.values?.reduce(
    (max, current) => (current.results > max.results ? current : max),
    categoryObject?.values[0]
  );
  const resultArray = maxResultsObject ? [maxResultsObject.name] : [];
  return resultArray;
};

export const getCategoryPath = (categories: Filter[]): string[] => {
  const categoryObject = categories.find(
    (categorie) => categorie.id == "category"
  );
  if (
    categoryObject &&
    categoryObject.values &&
    categoryObject.values.length > 0
  ) {
    const nameCategorie = categoryObject.values[0].path_from_root[0].name;
    return [nameCategorie];
  }

  return [];
};

export const hasFilters = (categories: Availablefilter[]):boolean => {
  const categoryObject = categories.find(
    (categorie) => categorie.id == "category"
  );
  return !!categoryObject;
};
