import ProductModel from "../db/models/product.model.js";
import { mapperProductDomainToModel, mapperProductModelToDomain } from "../db/mapper/ProductMapper.js";
import { DomainWrapper } from "src/domain/model/DomainWrapper.js";
import { ProductRepository } from "src/domain/repository/ProductRepository.js";
import CategoryModel from "../db/models/category.model.js";
import { ProductWithCategoryDB } from "../db/models/type/ProductWithCategoryDB.js";
import { NewProductReqBody } from "src/domain/model/NewProductReqBody.js";
import { CATEGORY_TABLE_NAME } from "../db/utils/DBConst.js";
import { safeErrorMapper } from "../../common/MapperUtils.js";

// TODO: Inject the DB model using inversify
class ProductRepositoryImpl implements ProductRepository {  
    async getAllProducts(): Promise<DomainWrapper<ProductDomain[]>>{
        try {
            const products: ProductModel[] = await ProductModel.findAll({
                include: {
                    model: CategoryModel,
                    as: CATEGORY_TABLE_NAME,
                    attributes: ["name"]
                }
            });

            const productsValues = products.map((product: ProductModel) => {
                return mapperProductModelToDomain(product.dataValues as ProductWithCategoryDB)
            }); 
            return { type : "success", value: productsValues};
        } catch (error) {
            return safeErrorMapper(error);
        }
    }
    async getProductById(id: string): Promise<DomainWrapper<ProductDomain>>{
        try {
            const product: ProductModel | null = await ProductModel.findByPk(id,
                {
                    include: {
                    model: CategoryModel,
                    as: CATEGORY_TABLE_NAME,
                    attributes: ["name"]
                }}
            );
            if (!product) {
                return {type: "error", message: "Product not found"};
            }
            const productValue = mapperProductModelToDomain(product.dataValues  as ProductWithCategoryDB);
            return { type : "success", value: productValue};
        } catch (error) {
            return safeErrorMapper(error);
        }
    }

    async createProduct(product: NewProductReqBody): Promise<DomainWrapper<void>> {
        try {
            const category = await CategoryModel.findOne({
                where: {
                    name: product.category
                }
            });
            if (!category) {
                return { type : "error", message: "Unknown categories!"};
            }
            const newProduct = mapperProductDomainToModel(product, category.dataValues.id);
            await ProductModel.create(newProduct);
            // TODO: Make insert validation
            return { type : "success", value: void(0)};
        } catch (error) {
            return safeErrorMapper(error);
        }
    }

    async updateProduct(id: string, product: ProductDomain): Promise<DomainWrapper<void>> {
        try {
            await ProductModel.update(product, { where: { id } });
            return { type : "success", value: void(0)};
        } catch (error) {
            return safeErrorMapper(error);
        }
    }

    async deleteProduct(id: string): Promise<DomainWrapper<void>> {
        try {
            await ProductModel.destroy({where: { id } });
            return { type : "success", value: void(0)};
        } catch (error) {
            return safeErrorMapper(error);
        }
    }
}

export default ProductRepositoryImpl;
