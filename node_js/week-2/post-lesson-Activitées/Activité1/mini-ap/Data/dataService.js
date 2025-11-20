import fs from "fs/promises";

export const getProducts = async (q) => {
    // kanqraw file async bach manblockiwch thread
    const file = await fs.readFile("./data/products.json", "utf-8");
    let products = JSON.parse(file);

    // filters
    if (q.category) {
        products = products.filter((p) => p.category === q.category);
    }
    if (q.minPrice) {
        products = products.filter((p) => p.price >= +q.minPrice);
    }
    if (q.maxPrice) {
        products = products.filter((p) => p.price <= +q.maxPrice);
    }

    if (q.sort === "asc") {
        products.sort((a, b) => a.price - b.price);
    }
    if (q.sort === "desc") {
        products.sort((a, b) => b.price - a.price);
    }

    return {
        count: products.length,
        data: products
    };
};
