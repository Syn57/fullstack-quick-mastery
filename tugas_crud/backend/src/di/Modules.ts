import { Container } from "inversify";
import { DI_TYPES } from "./Types.js";
import ProductRepositoryImpl from "../data/repository/ProductRepositoryImpl.js";
import { ProductRepository } from "src/domain/repository/ProductRepository.js";

const container = new Container();

container.bind<ProductRepository>(DI_TYPES.ProductRepository).to(ProductRepositoryImpl);

export default container;
