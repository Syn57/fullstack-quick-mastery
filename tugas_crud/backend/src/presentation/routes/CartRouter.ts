import express from "express";
import CartController from "../controllers/CartController.js";

const cartRouter = express.Router();

cartRouter.get("/:id", CartController.getCartById);
cartRouter.put("/:id", CartController.updateCart);
cartRouter.delete("/:id", CartController.deleteCart);
cartRouter.post("/:id", CartController.addCart);

export default cartRouter;
