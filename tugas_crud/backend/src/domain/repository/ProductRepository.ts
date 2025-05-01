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
     */
    createProduct(product: ProductDomain) : Promise<DomainWrapper<void>>;

    /**
     * Handle to update an existing product.
     * @param id - The id of the product to update.
     * @param product - The updated product data.
     */
    updateProduct(id: string, product: ProductDomain): Promise<DomainWrapper<void>>;

    /**
     * Handle to delete a product by id.
     * @param id - The id of the product to delete.
     */
    deleteProduct(id: string): Promise<DomainWrapper<void>>;
}
