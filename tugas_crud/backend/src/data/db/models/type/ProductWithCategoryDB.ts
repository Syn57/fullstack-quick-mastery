import CategoryModel from "../category.model.js";
import { ProductDB } from "./ProductDB.js";

export type ProductWithCategoryDB = ProductDB & {
    categories: CategoryModel;
};
