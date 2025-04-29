import { Request, Response } from "express";
import { DI_TYPES } from "../../di/Types.js";
import container from "../../di/Modules.js";
import { ProductRepository } from "src/domain/repository/ProductRepository.js";

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
        if (products.type === "error") {
            // TODO: Add another code possibility error handling like 404
            // TODO: Convert to Data Trasnfer Object (DTO)
            res.status(500).json({
                error: products.message 
            });
        } else {
            res.status(200).json({
                message: "Products fetched successfully!",
                data: products.value
            });
        }
    }

    async getProductById(req: Request, res: Response): Promise<void> {
        const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
        const product = await productRepo.getProductById(req.params.id);
        if (product.type === "error") {
            // TODO: Add another code possibility error handling like 404
            // TODO: Convert to Data Trasnfer Object (DTO)
            res.status(500).json({
                error: product.message 
            });
        } else {
            res.status(200).json({
                message: "Product fetched successfully!",
                data: product.value
            });
        }
    }

    // TODO: Refactor to use DomainWrapper and add response to determine
    // when the product is successfully created or not
    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
            await productRepo.createProduct(req.body);
            res.status(200).json({ 
                status: 200,
                message: "Product created successfully",
                data: {} 
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    // ToDO: Refactor to use DomainWrapper and add response to determine
    // when the product is successfully updated or not
    async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
            await productRepo.updateProduct(req.params.id, req.body);
            res.status(200).json({ 
                status: 200,
                message: "Product updated successfully",
                data: {} 
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    // TODO: Refactor to use DomainWrapper and add response to determine
    // when the product is successfully deleted or not
    async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const productRepo = container.get<ProductRepository>(DI_TYPES.ProductRepository);
            await productRepo.deleteProduct(req.params.id);
            res.status(200).json({ 
                status: 200,
                message: "Product deleted successfully",
                data: {} 
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default new ProductController();
