const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I5ah2EOHEYZ4I6wjBRJsH1v9ZacNLOZbFwNCUmOnk6PnnfuHDHWCi1HoBnhWWmWJnrkrRYZ8xpCXOPMARjIqtDL00nr4iMIxg"
);

// API

// - App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// // - API routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: "usd",
//   });

//   console.log(paymentIntent)

//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// // - Listen command
// exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-d509c/us-central1/api

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    description: "Naveen's Amazon Clone !",
    shipping: {
      name: "xyz",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
