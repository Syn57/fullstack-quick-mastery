export interface ProductDB {
    id: string;
    name: string | null;
    price: number | null;
    category: string | null;
    stock: number | null;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}
