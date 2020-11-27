import React, { useState, useEffect } from 'react';

import './styles.css';


export default function Beleza() {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(products.length === 0) {
            fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
                .then(response => response.json())
                .then(res => {
                   setProducts(res.products)
                })
        }
    })

    return (
        <div className="product-page">
            <div className="product-content">

                <h1>Products List</h1>
                <ul className="product-list">
                    {products.map(product => (
                    
                        <li className="product-name" key={product.id}>
                            <img className="card-image" alt={product.name} src={product.image}/>
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-subtitle">{product.description}</p>

                            <span>De: R${product.oldPrice}</span><br />
                            <span className="newPrice">Por: R${product.price}</span><br/>

                            <button className="buy-btn">Comprar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}