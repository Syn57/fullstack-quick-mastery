import { CartDomain } from "../model/CartDomain.js";
import { DomainWrapper } from "../model/DomainWrapper.js";
import { NewCartReqBody } from "../model/NewCartReqBody.js";

export interface CartRepository {
    /**
     * Handle to get a cart by user id
     * @param id - The id of the user to retrieve the cart.
     * @returns {Promise<DomainWrapper<CartDomain[]>>} - A promise that resolves 
     * to a DomainWrapper containing an array of CartDomain objects.
     * The DomainWrapper can either be a success or an error.
     */
    getCartByUserId(id: string): Promise<DomainWrapper<CartDomain[]>>;

    /**
     * Handle to update an existing cart.
     * @param id - The id of the cart to update.
     * @param cart - The updated cart data.
     * @returns {Promise<DomainWrapper<void>>} - A promise that resolves to a DomainWrapper.
     * The DomainWrapper can either be a success or an error.
     */
    updateCart(id: string, cart: CartDomain): Promise<DomainWrapper<void>>;
    
    /**
     * Handle to delete a cart by id.
     * @param id - The id of the cart to delete.
     * @returns {Promise<DomainWrapper<void>>} - A promise that resolves to a DomainWrapper.
     * The DomainWrapper can either be a success or an error.
     */
    deleteCart(id: string): Promise<DomainWrapper<void>>;

    
    /**
     * Handle to add a new cart.
     * @param cart - The cart data to add.
     * @returns {Promise<DomainWrapper<void>>} - A promise that resolves to a DomainWrapper.
     * The DomainWrapper can either be a success or an error.
     */
    addCart(cart: NewCartReqBody): Promise<DomainWrapper<void>>;
}
