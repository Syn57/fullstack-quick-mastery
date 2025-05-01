import ProductModel from "../db/models/product.model.js";
import { mapperProductDomainToModel, mapperProductModelToDomain } from "../db/mapper/ProductMapper.js";
import { DomainWrapper } from "src/domain/model/DomainWrapper.js";
import { ProductRepository } from "src/domain/repository/ProductRepository.js";
import CategoryModel from "../db/models/category.model.js";
import { ProductWithCategoryDB } from "../db/models/type/ProductWithCategoryDB.js";
import { NewProductReqBody } from "src/domain/model/NewProductReqBody.js";
import { CATEGORY_TABLE_NAME } from "../db/utils/DBConst.js";

// TODO: Inject the DB model using inversify
class ProductRepositoryImpl implements ProductRepository {  
    async getAllProducts(): Promise<DomainWrapper<ProductDomain[]>>{
        return new Promise((resolve, _) => {
            ProductModel.findAll({
                include: {
                    model: CategoryModel,
                    as: CATEGORY_TABLE_NAME,
                    attributes: ["name"]
                }
            })
                .then((products: ProductModel[]) => {
                    const productsValues = products.map((product: ProductModel) => {
                        return mapperProductModelToDomain(product.dataValues as ProductWithCategoryDB)
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
            ProductModel.findByPk(id,
                {
                    include: {
                    model: CategoryModel,
                    as: CATEGORY_TABLE_NAME,
                    attributes: ["name"]
                }}
            )
                .then((product: ProductModel | null) => {
                    if (!product) {
                        return resolve({type: "error", message: "Product not found"});
                    }
                    const productValue = mapperProductModelToDomain(product.dataValues  as ProductWithCategoryDB);
                    resolve({ type : "success", value: productValue});
                })
                .catch((error: Error) => {
                    resolve({type: "error", message: error.message});
                });
        });
    }

    async createProduct(product: NewProductReqBody): Promise<DomainWrapper<void>> {
        const category = await CategoryModel.findOne({
            where: {
                name: product.category
            }
        });
        if (!category) {
            return new Promise((resolve, _) => {
                resolve({ type : "error", message: "Unknown categories!"});
            })
        }
        const newProduct = mapperProductDomainToModel(product, category.dataValues.id);
        console.log(newProduct)
        return new Promise((resolve, _) => {
            ProductModel.create(newProduct)
                .then( async () => {
                    // TODO: Make insert validation
                    resolve({ type : "success", value: void(0)});
                })
                .catch((error: Error) => {
                    resolve({type: "error", message:  error.message});
                });
        });
    }

    async updateProduct(id: string, product: ProductDomain): Promise<DomainWrapper<void>> {
        await ProductModel.update(product, { where: { id } });
        return new Promise((resolve, _) => {
            ProductModel.update(product, { where: { id } })
                .then( async () => {
                    // TODO: Make insert validation
                    // const updatedProduct = await ProductModel.findByPk(id);
                    // const isUpdated = Object.entries(product).every(([key, value]) => {
                    //     updatedProduct[key] === value
                    // });
                    // if (mapperProductModelToDomain(updatedProduct?.dataValues ?? null) == product) {
                    //     resolve({ type : "success", value: void(0)});
                    // } else {
                    //     resolve({type: "error", message: "Failed to Update product!"});
                    // }
                    resolve({ type : "success", value: void(0)});
                })
                .catch((error: Error) => {
                    resolve({type: "error", message:  error.message});
                });
        });
    }

    async deleteProduct(id: string): Promise<DomainWrapper<void>> {
        await ProductModel.destroy({where: { id } });
        return new Promise((resolve, _) => {
            ProductModel.destroy({ where: { id } })
                .then( async () => {
                    resolve({ type : "success", value: void(0)});
                })
                .catch((error: Error) => {
                    resolve({type: "error", message:  error.message});
                });
        });
    }
}

export default ProductRepositoryImpl;

