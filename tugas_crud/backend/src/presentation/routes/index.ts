import express from "express";
import productRouter from "./ProductRouter.js";
import categoryRouter from "./CategoryRouter.js";

const appRouter = express.Router();

appRouter.use("/api/products", productRouter);
appRouter.use("/api/categories", categoryRouter);

export default appRouter;
