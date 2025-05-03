import { CartDomain } from "src/domain/model/CartDomain";
import { DomainWrapper } from "src/domain/model/DomainWrapper";
import { CartRepository } from "src/domain/repository/CartRepository";
import CartModel from "../db/models/cart.model.js";
import ProductModel from "../db/models/product.model.js";
import { PRODUCT_TABLE_NAME } from "../db/utils/DBConst.js";
import { safeErrorMapper } from "../../common/MapperUtils.js";
import { mapCartWithProductDBtoCartDomain, mapperNewCartReqBodyToCartDB } from "../db/mapper/CartMapper.js";
import { NewCartReqBody } from "../../domain/model/NewCartReqBody.js";

class CartRepositoryImpl implements CartRepository {
    async getCartByUserId(id: string): Promise<DomainWrapper<CartDomain[]>> {
        try {
            const productDB = await CartModel.findAll({
                where: { userId: id },
                include: {
                    model: ProductModel,
                    as: PRODUCT_TABLE_NAME
                },
                attributes: ["id", "quantity"]
            })
            const productsValues = productDB.map((product: CartModel) => product.dataValues); 
            return {type: "success", value: mapCartWithProductDBtoCartDomain(productsValues)};
        } catch (error) {
            return safeErrorMapper(error)
        }
    }
    async updateCart(id: string, cart: CartDomain): Promise<DomainWrapper<void>> {
        try {
            await CartModel.update({
                quantity: cart.quantity,
                totalPrice: cart.totalPrice
            },{ where: { id }}); 
            return { type : "success", value: void(0)};
        } catch (error) {
            return safeErrorMapper(error);
        }
    }

    async deleteCart(id: string): Promise<DomainWrapper<void>> {
        try {
            await CartModel.destroy({ where: { id } });
            return {type: "success", value: void(0)};
        } catch (error) {
            return safeErrorMapper(error);
        }
    }

    async addCart(cart: NewCartReqBody): Promise<DomainWrapper<void>> {
        try {
            const product = await ProductModel.findByPk(cart.productId);
            if (!product) {
                return {type: "error", message: "Product not found"};
            }
            const newCart = mapperNewCartReqBodyToCartDB(cart, product?.dataValues?.price ?? 0)
            await CartModel.create(newCart);
            return {type: "success", value: void(0)};
        } catch (error) {
            return safeErrorMapper(error);
        }
    }
}

export default CartRepositoryImpl;
