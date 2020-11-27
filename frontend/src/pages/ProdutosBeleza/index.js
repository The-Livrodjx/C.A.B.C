import React, {useState, useEffect} from 'react';
import './styles.css';


export default function ProdutosBeleza() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        if(products.length === 0) {
            fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
                .then(res => res.json())
                .then(response => {
                    setProducts(response.items)
                })
        }
    })

    return (

        <div className="productsBeauty-page">
            <div className="productsBeauty-content">

                <ul>
                    {products.map(productInfo => (

                        <li key={productInfo.product.sku}>
                            <img src={productInfo} alt=""/>
                            <h2>{productInfo.quantity}</h2>
                            <h2>{productInfo.product.name}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}