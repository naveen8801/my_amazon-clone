import { Link , useHistory } from "react-router-dom";
import React  ,{useState} from 'react';
import styles from './login.module.css'
import { Button } from "@material-ui/core";
import {auth}   from '../../firebase';


function Login() {

  const history  = useHistory();

  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('')

  const signin = (e) =>{
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));


  }

  const register = (e) =>{

    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
      
      if(auth){
        history.push('/')
      }
    }).catch(error => alert(error.message))
  }


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
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
            <button type="submit" className={styles.login_signin_btn} onClick={signin}>Sign In</button>
          </form>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className={styles.login_register_btn} onClick={register}>
            Create Your Amazon Account
          </button>
        </div>
      </div>
    );
}

export default Login;
