import { DomainWrapper } from "src/domain/model/DomainWrapper.js";
import { CategoryRepository } from "src/domain/repository/CatergoryRepository.js";
import CategoryModel from "../db/models/category.model.js";
import ProductModel from "../db/models/product.model.js";
import { mapCategoryDBToCategoryWithProductDomain } from "../db/mapper/CategoryMapper.js";
import { CategoryWithProductDB } from "../db/models/type/CategoryWithProductDB.js";
import { CategoryWithProductDomain } from "src/domain/model/CategoryWithProductDomain.js";
import { PRODUCT_TABLE_NAME } from "../db/utils/DBConst.js";

class CategoryRepositoryImpl implements CategoryRepository {
    async getCategoriesWithProduct(): Promise<DomainWrapper<CategoryWithProductDomain[]>> {
        return new Promise((resolve, _) => {
            CategoryModel.findAll({
                include: {
                    model: ProductModel,
                    as: PRODUCT_TABLE_NAME,
                    attributes: ["name"]
                }
            })
                .then((categories: CategoryModel[]) => {
                    const categoriesValues = categories.map((category: CategoryModel) => {
                        return mapCategoryDBToCategoryWithProductDomain(category.dataValues as CategoryWithProductDB);
                    }); 
                    resolve({ type : "success", value: categoriesValues});
                })
                .catch((error: Error) => {
                    resolve({type: "error", message: error.message});
                });
        })
    }

    async getCategories(): Promise<DomainWrapper<string[]>> {
        return new Promise((resolve, _) => {
            CategoryModel.findAll()
                .then((categories: CategoryModel[]) => {

                    const categoriesValues = categories.map((category: CategoryModel) => {
                        return category.dataValues.name;
                    }); 
                    resolve({ type : "success", value: categoriesValues});
                })
                .catch((error: Error) => {
                    resolve({type: "error", message: error.message});
                });
        })
    }
}

export default CategoryRepositoryImpl;
