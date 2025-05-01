import { CategoryWithProductDomain, CategoryProductDomain } from "src/domain/model/CategoryWithProductDomain.js";
import { ProductDB } from "../models/type/ProductDB.js";
import { CategoryWithProductDB } from "../models/type/CategoryWithProductDB.js";

export function mapCategoryDBToCategoryWithProductDomain(db: CategoryWithProductDB): CategoryWithProductDomain {
    return {
        title: db?.name ?? "",
        products: mapCategoryProductDBToDomain(db.products ?? []),
    };
}

function mapCategoryProductDBToDomain(product: ProductDB[]): CategoryProductDomain[] {
    const mappedProduct = product.map((product) => {
        return {
            name: product.name ?? "",
            price: product.price ?? 0,
        };
    })
    return mappedProduct
}
