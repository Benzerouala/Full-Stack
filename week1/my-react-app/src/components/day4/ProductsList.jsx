import React from 'react'
import Product from './Product';

const ProductsList = (props) => {
    const products = [
        { name: "Laptop", price: 12000 },
        { name: "Phone", price: 7000 },
        { name: "Mouse", price: 150 }
    ];
    return (
        <div>
        {products.map((p) => (
            <Product name={p.name} price={p.price} />
        ))}
        </div>
    );
}

export default ProductsList