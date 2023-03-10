import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Form } from "reactstrap";
import { usePaymentHook } from "../../../hooks/usePaymentHook";
import { Button } from "../button";

export const PaymentInformation = () => {
  // card number input
  const [cardInput, setCardInput] = useState({
    isTouched: false,
    error: false,
    message: "",
  });

  const stripe = useStripe();
  const elements = useElements();
  const { isPaymentProcessing, paymentStatus, capturePayment } =
    usePaymentHook();

  useEffect(() => {
    if (paymentStatus.initiated) {
      if (paymentStatus.error) {
        toast.error("An error occured, please check logs!");
      } else {
        toast.success("Payment captured successfully!");
      }
    }
  }, [paymentStatus]);

  const handleChange = (event) => {
    if (!event) return;

    const { error, complete } = event;
    if (error) {
      setCardInput({ isTouched: true, error: true, ...error });
    } else if (!error && complete) {
      setCardInput({ isTouched: true, error: false });
    }
  };

  const isButtonDisabled = () => {
    if (isPaymentProcessing) {
      return true;
    }

    if (cardInput.isTouched) {
      return cardInput.error;
    }

    return true;
  };

  const paymentInit = async () => {
    const paymentDetail = await capturePayment(stripe, elements, 111);
    console.info("Payment confirmed! Details:", paymentDetail);
  };

  return (
    <Form className="container-fluid contact-info-container">
      <h2 className="mb-3">Payment Information</h2>
      <CardElement onChange={handleChange} />
      <p>{cardInput?.message}</p>
      <Button
        color="primary"
        label={isPaymentProcessing ? "PROCESSING.." : "COMPLETE PAYMENT"}
        isDisabled={isButtonDisabled()}
        submitCallbackFn={paymentInit}
      />
    </Form>
  );
};
