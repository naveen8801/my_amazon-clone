import React from 'react';
import styles from './checkoutProducts.module.css';
import { useSelector, useDispatch } from "react-redux";




function CheckoutProducts(props) {
    const dispatch = useDispatch();
  
    return (
      <div className={styles.checkoutProuduc}>
        <img className={styles.checkoutProduct_img} src={props.imgsrc} />
        <div className={styles.checkoutProducts_info}>
          <p className={styles.checkoutProduct_info_title}>{props.title}</p>
          <p className={styles.checkoutProduct_info_price}>
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className={styles.checkoutProduct_ratings}>
            {Array(props.ratings)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          <button
            className={styles.checkoutProduct_btn}
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_BASKET",
                id: props.id,
              })
            }
          >
            Remove From Basket
          </button>
        </div>
      </div>
    );
}

export default CheckoutProducts
