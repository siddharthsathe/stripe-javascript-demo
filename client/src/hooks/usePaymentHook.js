import axios from "axios";
import { useState } from "react";

export const usePaymentHook = () => {
  const [isPaymentProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({
    error: false,
    initiated: false,
  });
  const capturePayment = async (stripeRef, elementsRef, total) => {
    try {
      // Step 1 - Create a payment method in Stripe
      setIsProcessing(true);
      const { paymentMethod } = await stripeRef.createPaymentMethod({
        type: "card",
        card: elementsRef.getElement("card"),
        billing_details: {
          name: "Sid",
        },
      });

      // Step 2 - Retrieve a client secret from our backend API.
      const {
        data: { clientSecret },
      } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}payment/intent`,
        {
          total,
          paymentMethodId: paymentMethod.id,
          currency: "inr",
        }
      );

      // Step 3 - Finally, charge users card with Stripe!
      // After this call, you can create an order in your database or proceed with next steps in your application.
      const paymentDetail = await stripeRef.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });
      setPaymentStatus({ error: false, initiated: true });
      setIsProcessing(false);
      return paymentDetail;
    } catch (error) {
      setIsProcessing(false);
      setPaymentStatus({ error: true, initiated: true });
    }
  };
  return {
    isPaymentProcessing,
    paymentStatus,
    setIsProcessing,
    capturePayment,
  };
};
