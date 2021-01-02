import React from 'react'
import styles from './Header.module.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

function Header() {

    const cart = useSelector(state => state.basket)
    return (
      <div className={styles.header}>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className={styles.header_logo}
          ></img>
        </Link>
        <div className={styles.header_searchbar}>
          <input className={styles.header_input} type="text"></input>
          <SearchIcon class={styles.header_search_icon} />
        </div>
        <div className={styles.header_navbar}>
          <div className={styles.header_navbar_options}>
            <span className={styles.navbar_options_textone}>Hello Guest</span>
            <span className={styles.navbar_options_texttwo}>Sign In</span>
          </div>
          <div className={styles.header_navbar_options}>
            <span className={styles.navbar_options_textone}>Returns </span>
            <span className={styles.navbar_options_texttwo}>Orders</span>
          </div>
          <div className={styles.header_navbar_options}>
            <span className={styles.navbar_options_textone}>Your</span>
            <span className={styles.navbar_options_texttwo}>Prime</span>
          </div>
        </div>
        <Link to="/checkout">
          <div className={styles.header_basket}>
            <ShoppingBasketIcon />
            <span className={styles.header_basket_count}>{cart.length}</span>
          </div>
        </Link>
      </div>
    );
}

export default Header
