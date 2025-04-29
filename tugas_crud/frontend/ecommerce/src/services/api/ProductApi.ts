const BASE_URL_API = import.meta.env.VITE_BASE_URL_PRODUCT_API;

class ProductAPI  {
    async getProductById(id: string) {
        const response = await fetch(`${BASE_URL_API}/product/${id}`);
        const data = await response.json();
        return data;
    }
    async getAllProduct() {
        const response = await fetch(`${BASE_URL_API}/product`);
        const data = await response.json();
        return data;
    }
    async createProduct(user: any) {
        const response = await fetch(`${BASE_URL_API}/product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        return data;
    }
    async updateProduct(id: string, user: any) {
        const response = await fetch(`${BASE_URL_API}/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        return data;
    }
    async deleteProduct(id: string) {
        const response = await fetch(`${BASE_URL_API}/product/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    }
}

export default new ProductAPI();