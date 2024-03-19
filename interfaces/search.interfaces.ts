export interface SearchBig {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: Sort[];
  filters: Filter[];
  available_filters: Availablefilter[];
  pdp_tracking: Differentialpricing;
}
export interface Availablefilter {
  id?: string;
  name?: string;
  type?: string;
  values?: AvailableValue[];
}
export interface Filter {
  id?: string;
  name?: string;
  type?: string;
  values?: Value[];
}
export interface Value {
  id: string;
  name: string;
  path_from_root: Sort[]
}

export interface AvailableValue {
  id: string;
  name: string;
  results: number;
}
export interface Sort {
  id: string;
  name: string;
}
export interface Result {
  id: string;
  title: string;
  condition: string;
  thumbnail_id?: string;
  catalog_product_id?: string;
  listing_type_id?: string;
  permalink?: string;
  buying_mode?: string;
  site_id?: string;
  category_id?: string;
  domain_id?: string;
  thumbnail: string;
  currency_id?: string;
  order_backend?: number;
  price: number;
  original_price?: number;
  sale_price?: any;
  available_quantity?: number;
  official_store_id?: number;
  official_store_name?: string;
  use_thumbnail_id?: boolean;
  accepts_mercadopago?: boolean;
  shipping?: Shipping;
  stop_time?: string;
  seller?: Seller;
  attributes?: Attribute[];
  location: Location;
  installments?: Installments;
  winner_item_id?: any;
  catalog_listing?: boolean;
  discounts?: any;
  promotions?: any[];
  differential_pricing?: Differentialpricing;
  inventory_id?: any;
  sold_quantity: number;
}
export interface Differentialpricing {}
export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}
export interface Attribute {
  id?: string;
  name?: string;
  value_id?: string;
  value_name?: string;
  attribute_group_id?: string;
  attribute_group_name?: string;
  value_struct?: any;
  values?: any[];
  source?: number;
  value_type?: string;
}
export interface Seller {
  id: number;
  nickname: string;
}
export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: any[];
  benefits?: any;
  promise?: any;
}
export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Location {
  address_line: string;
  zip_code: string;
  subneighborhood?: any;
  neighborhood: Neighborhood;
  city: Neighborhood;
  state: Neighborhood;
  country: Neighborhood;
  latitude: number;
  longitude: number;
}
interface Neighborhood {
  id: string;
  name: string;
}