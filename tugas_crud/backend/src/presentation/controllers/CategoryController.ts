import { Request, Response } from "express";
import container from "../../di/Modules.js";
import { DI_TYPES } from "../../di/Types.js";
import { CategoryRepository } from "../../domain/repository/CatergoryRepository.js";
import { API_CODE_200, API_CODE_500 } from "../utils/ApiConst.js";

class CategoryController {
    async getCategoriesWithProduct(_: Request, res: Response): Promise<void> {
        const categoryRepo = container.get<CategoryRepository>(DI_TYPES.CategoryRepository);
        const products = await categoryRepo.getCategoriesWithProduct();
        if (products.type === "success") {
            // TODO: Add another code possibility error handling like 404
            // TODO: Convert to Data Trasnfer Object (DTO)
            res.status(API_CODE_200).json({
                message: "Products fetched successfully!",
                data: products.value
            });
        } else {
            res.status(API_CODE_500).json({
                error: products.message 
            });
        }
    }

    async getCategories(_: Request, res: Response): Promise<void> {
        const categoryRepo = container.get<CategoryRepository>(DI_TYPES.CategoryRepository);
        const products = await categoryRepo.getCategories();
        if (products.type === "success") {
            // TODO: Add another code possibility error handling like 404
            // TODO: Convert to Data Trasnfer Object (DTO)
            res.status(API_CODE_200).json({
                message: "Products fetched successfully!",
                data: products.value
            });
        } else {
            res.status(API_CODE_500).json({
                error: products.message 
            });
        }
    }
} 

export default new CategoryController();