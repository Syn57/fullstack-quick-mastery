export interface CartDB {
    id: string;
    userId: string;
    quantity: number;
    totalPrice: number;
    isActive: number;
    createdAt: Date;
    updatedAt: Date;
}
