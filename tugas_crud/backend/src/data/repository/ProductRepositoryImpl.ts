import { v4 as uuidv4 } from "uuid";
import ProductModel from "../db/models/product.model.js";
import { mapperProductModelToDomain } from "../db/mapper/ProductMapper.js";
import { DomainWrapper } from "src/domain/model/DomainWrapper.js";
import { ProductRepository } from "src/domain/repository/ProductRepository.js";

class ProductRepositoryImpl implements ProductRepository {  
    async getAllProducts(): Promise<DomainWrapper<ProductDomain[]>>{
        return new Promise((resolve, _) => {
            ProductModel.findAll()
                .then((products: ProductModel[]) => {
                    const productsValues = products.map((product: ProductModel) => {
                        return mapperProductModelToDomain(product.dataValues)
                    }); 
                    resolve({ type : "success", value: productsValues});
                })
                .catch((error: Error) => {
                    resolve({type: "error", message: error.message});
                });
        })
    }
    async getProductById(id: string): Promise<DomainWrapper<ProductDomain>>{
        return new Promise((resolve, _) => {
            ProductModel.findByPk(id)
                .then((product: ProductModel | null) => {
                    if (!product) {
                        return resolve({type: "error", message: "Product not found"});
                    }
                    const productValue = mapperProductModelToDomain(product.dataValues);
                    resolve({ type : "success", value: productValue});
                })
                .catch((error: Error) => {
                    resolve({type: "error", message: error.message});
                });
        });
    }

    async createProduct(product: ProductDomain): Promise<void> {
        const newProduct = { ...product, id: uuidv4() };
        ProductModel.create(newProduct)
        return Promise.resolve();
    }

    async updateProduct(id: string, product: ProductDomain): Promise<void> {
        await ProductModel.update(product, { where: { id } });
        return Promise.resolve();
    }

    async deleteProduct(id: string): Promise<void> {
        await ProductModel.destroy({where: { id } });
        return Promise.resolve();
    }
}

export default ProductRepositoryImpl;

