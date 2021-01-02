import React from 'react'
import styles from './subtotal.module.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from "react-redux";


function Subtotal() {
    const cart = useSelector((state) => state.basket);
    const subtotal = cart.map(i => {
      return i.price;
    })
    const sum = subtotal.reduce(function (a, b) {
      return a + b;
    }, 0);

    return (
      <div className={styles.subtotal}>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({cart.length} items): <strong>{value}</strong>
              </p>
              <small className={styles.subtotal_gift}>
                <input type="checkbox" /> This order contains a gift
              </small> 
            </>
          )}
          decimalScale={2}
          value={sum}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button className={styles.checkout_btn}>Proceed to checkout</button>
      </div>
    );
}

export default Subtotal
