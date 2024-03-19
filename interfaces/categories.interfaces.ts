export interface categoriesInterface {
    id: string;
    name: string;
    picture: string;
    permalink?: any;
    total_items_in_this_category: number;
    path_from_root: Pathfromroot[];
    children_categories: any[];
    attribute_types: string;
    settings: Settings;
    channels_settings: any[];
    meta_categ_id?: any;
    attributable: boolean;
    date_created: string;
  }
  interface Settings {
  }
  interface Pathfromroot {
    id: string;
    name: string;
  }