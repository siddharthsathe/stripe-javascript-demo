import React from "react";
import { Footer } from "./components/atoms/footer";
import Header from "./components/atoms/header";
import { Checkout } from "./components/atoms/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const stripeInstance = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );
  return (
    <React.Fragment>
      <Header />
      <Elements stripe={stripeInstance}>
        <Checkout />
      </Elements>
      <Footer />
    </React.Fragment>
  );
}

export default App;
