import React from 'react';
import '../css/Product.css'; 
import { AddToBasketContext } from '../context/context'

function Product({ id, title, image, price, rating }) {
    const addToBasket = React.useContext(AddToBasketContext);

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={() => addToBasket({id, title, image, price, rating})}>Add to Basket</button>
        </div>
    )
}

export default Product;
