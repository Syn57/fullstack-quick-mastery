import { CartDomain } from "src/domain/model/CartDomain";
import { CartWithProductDB } from "../models/type/CartWithProductDB";
import { NewCartReqBody } from "../../../domain/model/NewCartReqBody.js";
import { CartDB } from "../models/type/CartDB.js";
import { v4 as uuidv4 } from "uuid";

export function mapCartWithProductDBtoCartDomain(db: CartWithProductDB[]): CartDomain[] {
    const mappedCart = db.map((cart) => {
        const total = (cart?.products?.price ?? 0) * (cart?.quantity ?? 0)
        return {
            id: cart.id,
            quantity: cart?.quantity ?? 0,
            totalPrice: total,
            productName: cart.products?.name ?? "",
            productPrice: cart.products?.price ?? 0,
            productImage: cart.products?.image ?? "",
            productStock: cart.products?.stock ?? 0,
        }
    })
    return mappedCart
}

export function mapperNewCartReqBodyToCartDB(req: NewCartReqBody, price: number): CartDB {
    const total = req.quantity * price
    return {
        id: uuidv4(),
        quantity: req.quantity,
        totalPrice: total,
        userId: req.userId,
        productId: req.productId,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
    }
}
