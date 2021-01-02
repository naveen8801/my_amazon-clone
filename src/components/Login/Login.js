import { Link } from "react-router-dom";
import React from 'react';
import styles from './login.module.css'
import { Button } from "@material-ui/core";

function Login() {
    return (
      <div className={styles.login}>
        <Link to="/">
          <img
            className={styles.login_img}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </Link>
        <div className={styles.login_container}>
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text"></input>
            <h5>Password</h5>
            <input type="password"></input>
            <button className={styles.login_signin_btn}>Sign In</button>
          </form>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className={styles.login_register_btn}>
            Create Your Amazon Account
          </button>
        </div>
      </div>
    );
}

export default Login;
