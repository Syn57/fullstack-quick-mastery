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
    
    async updateCart(req: Request, res: Response): Promise<void> {
        try {
            const cartRepo = container.get<CartRepository>(DI_TYPES.CartRepository);
            const update = await cartRepo.updateCart(req.params.id, req.body);
            if (update.type === "success") {
                res.status(API_CODE_200).json({
                    message: "Cart updated successfully!",
                    data: update.value
                });
            } else {
                res.status(API_CODE_500).json({
                    error: update.message 
                });
            }
        } catch (error) {
            console.error("Error updating cart:", error);
            res.status(500).json({ 
                error: "Internal Server Error" 
            });
        }
    }
    
    async deleteCart(req: Request, res: Response): Promise<void> {
        try {
            const cartRepo = container.get<CartRepository>(DI_TYPES.CartRepository);
            const deleteCart = await cartRepo.deleteCart(req.params.id);
            if (deleteCart.type === "success") {
                res.status(API_CODE_200).json({
                    message: "Cart deleted successfully!",
                    data: deleteCart.value
                });
            } else {
                res.status(API_CODE_500).json({
                    error: deleteCart.message 
                });
            }
        } catch (error) {
            console.error("Error deleting cart:", error);
            res.status(500).json({ 
                error: "Internal Server Error" 
            });
        }
    }

    
    async addCart(req: Request, res: Response): Promise<void> {
        try {
            const cartRepo = container.get<CartRepository>(DI_TYPES.CartRepository);
            const addCart = await cartRepo.addCart(req.body);
            if (addCart.type === "success") {
                res.status(API_CODE_200).json({
                    message: "Cart added successfully!",
                    data: addCart.value
                });
            } else {
                res.status(API_CODE_500).json({
                    error: addCart.message 
                });
            }
        } catch (error) {
            console.error("Error adding cart:", error);
            res.status(500).json({ 
                error: "Internal Server Error" 
            });
        }
    }
}

export default new CartController();