export interface CartDB {
    id: string;
    userId: string;
    productId: string;
    quantity: number | null;
    totalPrice: number | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
