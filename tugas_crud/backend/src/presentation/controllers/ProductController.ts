import { Request, Response } from "express";
import { DI_TYPES } from "../../di/Types.js";
import container from "../../di/Modules.js";
import { ProductRepository } from "src/domain/repository/ProductRepository.js";
import { API_CODE_200, API_CODE_500 } from "../utils/ApiConst.js";
import { newProductReqBodyvalidator, updateProductReqBodyvalidator } from "../utils/reqbody.validator.js";

/**
 * ProductController is a class that handles HTTP requests related to products.
 * It interacts with the ProductRepository to perform CRUD operations.
 * The controller methods handle incoming requests, process data, and send responses.
 * 
 * TODO: Inject the repo using di
 */
class ProductController {

    async getAllProducts(_: Request, res: Response): Promise<void> {
        const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
        const products = await productRepo.getAllProducts();
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

    async getProductById(req: Request, res: Response): Promise<void> {
        const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
        const product = await productRepo.getProductById(req.params.id);
        if (product.type === "success") {
            // TODO: Add another code possibility error handling like 404
            // TODO: Convert to Data Trasnfer Object (DTO)
            res.status(API_CODE_200).json({
                message: "Product fetched successfully!",
                data: product.value
            });
        } else {
            res.status(API_CODE_500).json({
                error: product.message 
            });
        }
    }

    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            await newProductReqBodyvalidator.validate(req.body, { abortEarly: true });
            const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
            const create = await productRepo.createProduct(req.body);
            if (create.type === "success") {
                // TODO: Convert to Data Trasnfer Object (DTO)
                res.status(API_CODE_200).json({
                    message: "Product created successfully!",
                    data: create.value
                });
            } else {
                // TODO: Add another code possibility error handling like 404
                res.status(API_CODE_500).json({
                    error: create.message 
                });
            }
        } catch (error) {
            console.error("Error updating product:", error);
            res.status(API_CODE_500).json({ 
                error: error instanceof Error ? error.message : "Internal Server Error" 
            });
        }
    }

    // TODO: Refactor to use DomainWrapper and add response to determine
    // when the product is successfully updated or not
    async updateProduct(req: Request, res: Response): Promise<void> {
        try {           
            // TODO: Prevent id beaing sent as req body 
            await updateProductReqBodyvalidator.validate(req.body, { abortEarly: true });
            const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
            const update = await productRepo.updateProduct(req.params.id, req.body);
            if (update.type === "success") {
                // TODO: Convert to Data Trasnfer Object (DTO)
                res.status(API_CODE_200).json({
                    message: "Product updated successfully!",
                    data: update.value
                });
            } else {
                // TODO: Add another code possibility error handling
                res.status(API_CODE_500).json({
                    error: update.message 
                });
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(API_CODE_500).json({ error: "Internal Server Error" });
        }
    }

    // TODO: Refactor to use DomainWrapper and add response to determine
    // when the product is successfully deleted or not
    async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
            const deleteProduct = await productRepo.deleteProduct(req.params.id);
            if (deleteProduct.type === "success") {
                // TODO: Convert to Data Trasnfer Object (DTO)
                res.status(API_CODE_200).json({
                    message: "Product deleted successfully!",
                    data: deleteProduct.value
                });
            } else {
                // TODO: Add another code possibility error handling
                res.status(API_CODE_500).json({
                    error: deleteProduct.message 
                });
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ 
                error: "Internal Server Error" 
            });
        }
    }
}

export default new ProductController();
