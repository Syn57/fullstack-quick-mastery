import express from "express";
import CartController from "../controllers/CartController.js";

const cartRouter = express.Router();

cartRouter.get("/", CartController.getCartById);

export default cartRouter;