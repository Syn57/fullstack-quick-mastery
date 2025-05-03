import { CartDB } from "./CartDB.js";
import { ProductDB } from "./ProductDB.js";

export type CartWithProductDB = CartDB & {
    products?: ProductDB;
};