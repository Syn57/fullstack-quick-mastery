import express from "express";
import ProductController from "../controllers/ProductController.js";
import { body } from "express-validator";

const productRouter = express.Router();

productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/:id", ProductController.getProductById);
productRouter.post("", ProductController.createProduct);
productRouter.put("/:id", ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);

export default productRouter;