import express from "express";
import productRouter from "./ProductRouter.js";
import categoryRouter from "./CategoryRouter.js";
import cartRouter from "./CartRouter.js";

const appRouter = express.Router();

// TODO: Add middlware for each endpoint
appRouter.use("/api/products", productRouter);
appRouter.use("/api/categories", categoryRouter);
appRouter.use("/api/cart", cartRouter);

export default appRouter;
