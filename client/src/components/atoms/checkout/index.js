import React from "react";
import { CheckoutForm } from "../checkout/form";
import { Container, Col, Row } from "reactstrap";
import { CartDetails } from "../cart";
import { PaymentInformation } from "../payment/PaymentInformation";

export const Checkout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="left-col-container pb-4" md="6">
            <CheckoutForm />
            <PaymentInformation />
          </Col>
          <Col className="right-col-container pb-4" md="6">
            <CartDetails
              itemCount={2}
              subTotal={249.98}
              taxes={9.99}
              orderTotal={259.97}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
