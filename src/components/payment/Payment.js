import React ,{useState,useEffect} from "react";
import styles from "./payment.module.css";
import { useSelector , useDispatch } from "react-redux";
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import { Link ,useHistory } from "react-router-dom";
import {CardElement ,useStripe,useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from "react-currency-format";
import axios from '../../axios';


function Payment() {
  const dispatch = useDispatch();
    const history = useHistory();
  const user = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);
  const subtotal = basket.map((i) => {
    return i.price;
  });
  const sum = subtotal.reduce(function (a, b) {
    return a + b;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();

//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [ClientSecret, setClientSecret] = useState(true);

        const [succeeded, setSucceeded] = useState(false);
        const [processing, setProcessing] = useState("");
        const [error, setError] = useState(null);
        const [disabled, setDisabled] = useState(true);
        const [clientSecret, setClientSecret] = useState(true);

useEffect(() => {
  // generate the special stripe secret which allows us to charge a customer
  const getClientSecret = async () => {
    const response = await axios({  
      method: "post",
      url: `/payments/create?total=${sum * 100}`,
    });
    setClientSecret(response.data.clientSecret);
  };

  getClientSecret();
}, [basket]);

  console.log('The secret is  ' , clientSecret)
  // console.log("👱", user);

const handleSumbit = async (event) => {
  // do all the fancy stripe stuff...
  event.preventDefault();
  setProcessing(true);

  const payload = await stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })
    .then(({ paymentIntent }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: "EMPTY_BASKET",
      });

      history.replace("/orders");
    });
};

   const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
   };


  return (
    <div className={styles.payment}>
      <div className={styles.payment_container}>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className={styles.payment_section}>
          <div className={styles.payment_section_title}>
            <h3> Delivery Adress</h3>
          </div>
          <div className={styles.payment_section_adress}>
            <p>{user?.email}</p>
            <p>123 , Adress Line</p>
            <p>India </p>
          </div>
        </div>
        <div className={styles.payment_section}>
          <div className={styles.payment_section_title}>
            <h3> Review Items For Delivery </h3>
          </div>
          <div className={styles.payment_section_items}>
            {basket.map((i) => {
              return (
                <CheckoutProducts
                  title={i.title}
                  imgsrc={i.image}
                  ratings={i.ratings}
                  price={i.price}
                  id={i.id}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.payment_section}>
          <div className={styles.payment_section_title}>
            <h3> Payment Method</h3>
          </div>
          <div className={styles.payment_method}>
            <form onSubmit={handleSumbit}>
              <CardElement onChange={handleChange} />
              <div className={styles.payment_price_container}>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        Order Total: <strong>{value}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={sum}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
