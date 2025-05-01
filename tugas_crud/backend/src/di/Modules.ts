import { Container } from "inversify";
import { DI_TYPES } from "./Types.js";
import ProductRepositoryImpl from "../data/repository/ProductRepositoryImpl.js";
import { ProductRepository } from "src/domain/repository/ProductRepository.js";
import { CategoryRepository } from "src/domain/repository/CatergoryRepository.js";
import CategoryRepositoryImpl from "../data/repository/CategoryRepositoryImpl.js";

const container = new Container();

container.bind<ProductRepository>(DI_TYPES.ProductRepository).to(ProductRepositoryImpl);
container.bind<CategoryRepository>(DI_TYPES.CategoryRepository).to(CategoryRepositoryImpl);

export default container;
