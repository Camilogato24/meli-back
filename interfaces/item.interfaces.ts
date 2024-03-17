export interface ItemDetail {
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: number;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  sale_terms: Saleterm[];
  buying_mode: string;
  listing_type_id: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: Picture[];
  video_id?: any;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: Selleraddress;
  seller_contact?: any;
  location: Shipping;
  coverage_areas: any[];
  attributes: Attribute[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: any[];
  tags: any[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id?: any;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health?: any;
  catalog_listing: boolean;
  sold_quantity: number;
}
export interface Attribute {
  id?: string;
  name?: string;
  value_id?: string;
  value_name?: string;
  values?: any[];
  value_type?: string;
}
export interface Selleraddress {
  city: City;
  state: City;
  country: City;
  search_location: Searchlocation;
  id: number;
}
export interface Searchlocation {
  neighborhood: Shipping;
  city: City;
  state: City;
}
export interface City {
  id: string;
  name: string;
}
export interface Shipping {}
export interface Picture {
  id?: string;
  url?: string;
  secure_url?: string;
  size?: string;
  max_size?: string;
  quality?: string;
}
export interface Saleterm {
  id?: string;
  name?: string;
  value_id?: string;
  value_name?: string;
  value_struct?: any;
  values?: Value[];
  value_type?: string;
}
export interface Value {
  id: string;
  name: string;
  struct?: any;
}
