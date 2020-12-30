import { StepLabel } from '@material-ui/core';
import React from 'react'
import styles from './checkout.module.css'

function Checkout() {
    return (
      <div className={styles.checkout}>
        <div className={styles.checkout_left}>
          <img
            className={styles.checkout_ad}
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          ></img>
          <div className={styles.checkout_title}>
            <h2>Your Shopping Basket</h2>
          </div>
        </div>
        <div className={styles.checkout_right}>
          <h2>Your Subtotal</h2>
        </div>
      </div>
    );
}

export default Checkout
