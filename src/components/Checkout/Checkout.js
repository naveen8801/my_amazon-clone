import { StepLabel } from '@material-ui/core';
import React from 'react'
import Subtotal from '../Subtotal/Subtotal';
import styles from './checkout.module.css';
import {useSelector} from 'react-redux';
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';
import { auth } from "../../firebase";


function Checkout() {

    const basket = useSelector(state => state.basket);
    const p = basket.map(i=>{
      return <CheckoutProducts title={i.title} imgsrc={i.image} ratings={i.ratings} price={i.price} id={i.id} />
             
    })
    const user  = useSelector(state => state.user);
    

    return (
      <div className={styles.checkout}>
        <div className={styles.checkout_left}>
          <img
            className={styles.checkout_ad}
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          ></img>
          <div className={styles.checkout_title}>
            {user ? <h4>Hello ,{user.email}</h4> : null}
            
            <h2>Your Shopping Basket :</h2>
          </div>
          {p}
        </div>
        <div className={styles.checkout_right}>
          <Subtotal/>
        </div>
      </div>
    );
}

export default Checkout
