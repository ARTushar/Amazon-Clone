import React from 'react';
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { BasketContext } from '../context/context'

function calculateTotalPrice(items) {
    let price = 0;
    for(let i = 0; i < items.length; i++){
        price += items[i].price;
    }
    return price;
}

function Subtotal() {
    const basket = React.useContext(BasketContext);

    return (
        <div className="subtotal">
             <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                Subtotal ({basket.items.length} items):  <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={calculateTotalPrice(basket.items)} //getBasketTotal(basket)
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;