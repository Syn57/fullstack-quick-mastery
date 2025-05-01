export interface CategoryWithProductDomain {
    title: string;
    products: CategoryProductDomain[];
}

export interface CategoryProductDomain {
    name: string;
    price: number;
}
