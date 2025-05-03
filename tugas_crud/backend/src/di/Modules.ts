import { Container } from "inversify";
import { DI_TYPES } from "./Types.js";
import ProductRepositoryImpl from "../data/repository/ProductRepositoryImpl.js";
import { ProductRepository } from "src/domain/repository/ProductRepository.js";
import { CategoryRepository } from "src/domain/repository/CatergoryRepository.js";
import CategoryRepositoryImpl from "../data/repository/CategoryRepositoryImpl.js";
import { CartRepository } from "src/domain/repository/CartRepository.js";
import CartRepositoryImpl from "../data/repository/CartRepositoryImpl.js";

const container = new Container();

container.bind<ProductRepository>(DI_TYPES.ProductRepository).to(ProductRepositoryImpl);
container.bind<CategoryRepository>(DI_TYPES.CategoryRepository).to(CategoryRepositoryImpl);
container.bind<CartRepository>(DI_TYPES.CartRepository).to(CartRepositoryImpl);

export default container;
