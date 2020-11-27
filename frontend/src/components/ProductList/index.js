import React from 'react';
import './styles.css'

export default function ProductList(products) {


    return (
        <ul className="product-list">
            {products.map(product => (
                <li className="product" key={product.id}>
                    <img src={product.image} alt=""/>
                    
                </li>
            ))}
        </ul>
    )
}