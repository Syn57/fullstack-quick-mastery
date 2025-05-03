export interface CartProductDB {
    id: string;
    productId: string;
    cartId: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}
