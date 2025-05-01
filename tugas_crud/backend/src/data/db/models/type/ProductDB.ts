export interface ProductDB {
    id: string;
    name: string | null;
    price: number | null;
    stock: number | null;
    image: string | null;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}
