export interface SearchMinified {
  author: Author;
  categories: string[];
  items: Item[];
}
export interface Item {
  id?: string;
  title?: string;
  price?: Price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
}
export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
export interface Author {
  name: string | undefined;
  lastname: string | undefined;
}
