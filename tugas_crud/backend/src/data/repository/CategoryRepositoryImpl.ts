import { DomainWrapper } from "src/domain/model/DomainWrapper.js";
import { CategoryRepository } from "src/domain/repository/CatergoryRepository.js";
import CategoryModel from "../db/models/category.model.js";
import ProductModel from "../db/models/product.model.js";
import { mapCategoryDBToCategoryWithProductDomain } from "../db/mapper/CategoryMapper.js";
import { CategoryWithProductDB } from "../db/models/type/CategoryWithProductDB.js";
import { CategoryWithProductDomain } from "src/domain/model/CategoryWithProductDomain.js";
import { PRODUCT_TABLE_NAME } from "../db/utils/DBConst.js";
import { safeErrorMapper } from "../../common/MapperUtils.js";

class CategoryRepositoryImpl implements CategoryRepository {
    async getCategoriesWithProduct(): Promise<DomainWrapper<CategoryWithProductDomain[]>> {
        try {
            const categories = await CategoryModel.findAll({
                include: {
                    model: ProductModel,
                    as: PRODUCT_TABLE_NAME,
                    attributes: ["name"]
                }
            });
            const categoriesValues = categories.map((category: CategoryModel) => {
                return mapCategoryDBToCategoryWithProductDomain(category.dataValues as CategoryWithProductDB);
            });
            return { type: "success", value: categoriesValues };
        } catch (error) {
            return safeErrorMapper(error);
        }
    }

    async getCategories(): Promise<DomainWrapper<string[]>> {
        try {
            const categories = await CategoryModel.findAll();

            const categoriesValues = categories.map((category: CategoryModel) => {
                return category.dataValues.name;
            }); 
            
            return { type: "success", value: categoriesValues };
        } catch (error) {
            return safeErrorMapper(error);
        }
    }
}

export default CategoryRepositoryImpl;
