import { Product } from "@/app/lesson07_01/page";

export async function searchProducts(prevState: Product[], formData: FormData) {
    const query = formData.get("query") as string;
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const {products} = (await res.json()) as { products: Product[]};
    return products;
}