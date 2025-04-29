import express from "express";
import productRouter from "./ProductRouter.js";

const appRouter = express.Router();

appRouter.use("/", productRouter);

export default appRouter;
