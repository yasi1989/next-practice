import "server-only";

export async function products() {
    const res = await fetch(`https://dummyjson.com/products/1`);
    return res.json();
}