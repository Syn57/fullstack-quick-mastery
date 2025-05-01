import { CategoryDB } from "./CategoryDB.js";
import { ProductDB } from "./ProductDB.js";

export type CategoryWithProductDB = CategoryDB & {
    products?: ProductDB[];
};
