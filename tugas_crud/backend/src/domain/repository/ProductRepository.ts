import { DomainWrapper } from "../model/DomainWrapper";

export interface ProductRepository {
    /**
     * Handle to get all the product
     * 
     * @returns {Promise<DomainWrapper<ProductDomain[]>>} - A promise that resolves 
     * to a DomainWrapper containing an array of ProductDomain objects.
     * The DomainWrapper can either be a success or an error.
     * 
     * TODO: Add pagination.
     */
    getAllProducts(): Promise<DomainWrapper<ProductDomain[]>>;

    /**
     * Handle to get a product by id
     * 
     * @param {string} id - The id of the product to retrieve.
     * @returns {Promise<DomainWrapper<ProductDomain>>} - A promise that resolves 
     * to a DomainWrapper containing the ProductDomain object.
     * The DomainWrapper can either be a success or an error.
     */
    getProductById(id: string): Promise<DomainWrapper<ProductDomain>>;

    /**
     * Handle to create a new product.
     * @param product - The product to create.
     * 
     * TODO: Refactor to use DomainWrapper and add response to determine
     * when the product is successfully created or not
     */
    createProduct(product: ProductDomain) : Promise<void>;

    /**
     * Handle to update an existing product.
     * @param id - The id of the product to update.
     * @param product - The updated product data.
     * 
     * TODO: Refactor to use DomainWrapper and add response to determine
     * when the product is successfully updated or not
     */
    updateProduct(id: string, product: ProductDomain): Promise<void>;

    /**
     * Handle to delete a product by id.
     * @param id - The id of the product to delete.
     * 
     * TODO: Refactor to use DomainWrapper and add response to determine
     * when the product is successfully deleted or not
     */
    deleteProduct(id: string): Promise<void>;
}
