import CategoryController from "../controllers/CategoryController.js";
import express from "express";


const categoryRouter = express.Router();

categoryRouter.get("/", CategoryController.getCategoriesWithProduct);
categoryRouter.get("/name", CategoryController.getCategories);

export default categoryRouter;