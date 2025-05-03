import { CartDomain } from "src/domain/model/CartDomain";
import { DomainWrapper } from "src/domain/model/DomainWrapper";
import { CartRepository } from "src/domain/repository/CartRepository";
import CartModel from "../db/models/cart.model.js";
import ProductModel from "../db/models/product.model.js";
import { PRODUCT_TABLE_NAME } from "../db/utils/DBConst.js";
import { safeErrorMapper } from "../../common/MapperUtils.js";

class CartRepositoryImpl implements CartRepository {
    async getCartByUserId(id: string): Promise<DomainWrapper<any>> {
        try {
            const productDB = await CartModel.findAll({
                where: { userId: id },
                include: {
                    model: ProductModel,
                    as: PRODUCT_TABLE_NAME,
                    attributes
                },
                attributes: ["id", "quantity", "totalPrice"]
            })
            const productsValues = productDB.map((product: CartModel) => {
                return product.dataValues
            }); 
            return {type: "success", value: productsValues};
        } catch (e) {
            return safeErrorMapper(e)
        }
    }
    async updateCart(id: string, cart: CartDomain): Promise<DomainWrapper<void>> {
        throw new Error("Method not implemented.");
    }
}

export default CartRepositoryImpl;