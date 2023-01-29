import React from "react";
import { Container, Row, Col } from "reactstrap";
import PiImg from "../../../assets/images/Raspberry_Pi.png";
import PiLcdImg from "../../../assets/images/Raspberry_Pi_LCD.png";

export const CartDetails = ({ itemCount, subTotal, orderTotal, taxes }) => (
  <Container className="cart-details-container">
    <div className="container-fluid">
      <h2>
        <span>Item details</span>
      </h2>
      <Container>
        <Row>
          <Col xs="9">
            <div className="media">
              <div className="media-body">
                <img
                  src={PiImg}
                  className="img-fluid mr-3"
                  alt="raspberry pi"
                />
              </div>
              <h5 className="mt-0">Raspberry Pi 3 Model B Motherboard</h5>
            </div>
          </Col>
          <Col xs="3">
            <div className="conatiner-fluid">
              <h6>$38.50</h6>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="9">
            <div className="media">
              <div className="media-body">
                <img src={PiLcdImg} className="img-fluid mr-3" alt="pi lcd" />
              </div>
              <h5 className="mt-0">Raspberry Pi 7" Touchscreen Display</h5>
            </div>
          </Col>
          <Col xs="3">
            <div className="conatiner-fluid">
              <h6>$72.92</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Container className="mt-4">
      <Row>
        <Col xs="9">
          <h6>Subtotal ({itemCount} items):</h6>
        </Col>
        <Col xs="3">
          <h6>${subTotal}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs="9">
          <h6>Shipping:</h6>
        </Col>
        <Col xs="3">
          <h6>
            {/* {shippingTotal !== 0 ? (
              "$" + Number(this.props.data)
            ) : (
              <span>--</span>
            )} */}
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs="9">
          <h6>Taxes:</h6>
        </Col>
        <Col xs="3">
          <h6>${taxes}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs="9">
          <h6>Total: </h6>
        </Col>
        <Col xs="3">
          <h6>${orderTotal}</h6>
        </Col>
      </Row>
    </Container>
    <Container>
      <div>
        <a href="/">100% Price Match Guarantee</a>
      </div>
      <div>
        <a href="/">90 Day Returns</a>
      </div>
    </Container>
    {/* <Button className="mt-4" color="primary" block>
      COMPLETE ORDER
    </Button> */}
  </Container>
);
