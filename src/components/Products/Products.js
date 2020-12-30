import React from 'react'
import styles from './products.module.css'

function Products(props) {
    return (
      <div className={styles.products}>
        <div className={styles.product_info}>
          <p className={styles.product_title}>{props.title}</p>
          <p className={styles.product_info_price}>
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className={styles.product_ratings}>
            {Array(props.rating).fill().map((_,i)=>{
              return <p>🌟</p>
            })}
            
          </div>
        </div>

        <img className={styles.product_img} src={props.imgsrc} />
        <button className={styles.product_btn}>Add To Basket</button>
      </div>
    );
}

export default Products
