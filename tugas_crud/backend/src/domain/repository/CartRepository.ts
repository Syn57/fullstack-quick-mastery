import { CartDomain } from "../model/CartDomain";
import { DomainWrapper } from "../model/DomainWrapper";

export interface CartRepository {
    // getCartById(id: string): Promise<DomainWrapper<CartDomain[]>>;
    getCartByUserId(id: string): Promise<DomainWrapper<any>>;
    updateCart(id: string, cart: CartDomain): Promise<DomainWrapper<void>>;
}