import { CartRepository } from "../../domain/repository/CartRepository.js";
import { Request, Response } from "express";
import container from "../../di/Modules.js";
import { DI_TYPES } from "../../di/Types.js";
import { API_CODE_200, API_CODE_500 } from "../utils/ApiConst.js";

class CartController {
    async getCartById(_: Request, res: Response): Promise<void> {
        const cartRepo = container.get<CartRepository>(DI_TYPES.CartRepository);
        const cart = await cartRepo.getCartByUserId("2");
        if (cart.type === "success") {
            res.status(API_CODE_200).json({
                message: "Cart fetched successfully!",
                data: cart.value
            });
        } else {
            res.status(API_CODE_500).json({
                error: cart.message 
            });
        }
    }
}

export default new CartController();