import { config as dotenv } from "dotenv";
dotenv();
export const config = {
    ENDPOINT_SEARCH: process.env.ENDPOINT_SEARCH,
    ENDPOINT_ITEM_PRODUCT: process.env.ENDPOINT_ITEM_PRODUCT,
    ENDPOINT_CATEGORIES: process.env.ENDPOINT_CATEGORIES,
    PORT: process.env.PORT,
    NOMBRE: process.env.NOMBRE,
    APELLIDO: process.env.APELLIDO
}