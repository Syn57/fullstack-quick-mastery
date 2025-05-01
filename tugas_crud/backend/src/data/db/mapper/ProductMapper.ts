import { ProductDB } from "src/data/db/models/type/ProductDB.js";
import { ProductWithCategoryDB } from "../models/type/ProductWithCategoryDB";
import { v4 as uuidv4 } from "uuid";
import { NewProductReqBody } from "src/domain/model/NewProductReqBody";

export function mapperProductModelToDomain(model: ProductWithCategoryDB | null): ProductDomain {
    return {
        id: model?.id ?? "",
        name: model?.name ?? "",
        price: model?.price ?? 0,
        category: model?.categories?.dataValues.name ?? "",
        stock: model?.stock ?? 0,
        image: model?.image ?? ""
    };
}

export function mapperProductDomainToModel(req: NewProductReqBody, catId: string): ProductDB {
    return {
        id: uuidv4(),
        name: req.name ?? "",
        price: req.price ?? 0,
        stock: req.stock ?? 0,
        image: req.image ?? "",
        categoryId: catId,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
}
