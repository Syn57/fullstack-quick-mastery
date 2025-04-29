import express from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get("/api/product", ProductController.getAllProducts);
productRouter.get("/api/product/:id", ProductController.getProductById);
productRouter.post("/api/product", ProductController.createProduct);
productRouter.put("/api/product/:id", ProductController.updateProduct);
productRouter.delete("/api/product/:id", ProductController.deleteProduct);

export default productRouter;