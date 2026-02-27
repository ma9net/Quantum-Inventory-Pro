import axios from "axios";

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return response.data
}