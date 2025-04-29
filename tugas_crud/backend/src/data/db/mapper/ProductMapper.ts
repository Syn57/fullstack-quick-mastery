import { ProductDB } from "src/data/db/models/ProductDB";

export function mapperProductModelToDomain(model: ProductDB): ProductDomain {
    return {
        id: model.id,
        name: model.name ?? "",
        price: model.price ?? 0,
        category: model.category ?? "",
        stock: model.stock ?? 0,
        isActive: model.isActive,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
    };
}

export function mapperProductModelToModel(domain: ProductDomain): ProductDB {
    return {
        id: domain.id,
        name: domain.name ?? "",
        price: domain.price ?? 0,
        category: domain.category ?? "",
        stock: domain.stock ?? 0,
        isActive: domain.isActive,
        createdAt: domain.createdAt,
        updatedAt: domain.updatedAt,
    };
}
