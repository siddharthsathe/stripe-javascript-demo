import React from "react";
import { Col, Row, Form, FormGroup, Input, Label } from "reactstrap";

export const CheckoutForm = () => (
  <Form className="container-fluid contact-info-container">
    <h2 className="mb-3">Contact Information</h2>

    <div>
      <FormGroup>
        <Input
          type="email"
          name="email"
          placeholder="Email (For Order Confirmation)"
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Input type="text" name="first_name" placeholder="First name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input type="text" name="last_name" placeholder="Last name" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input type="text" name="address" placeholder="Address" />
      </FormGroup>
      <FormGroup>
        <div className="toggle-container address2-text">
          <Input
            type="text"
            name="address"
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Input type="text" name="city" placeholder="City" />
      </FormGroup>
      <Row>
        <Col md={5}>
          <FormGroup className="dropdown-container">
            <Label for="country">Country</Label>
            <Input className="custom-select" type="select" name="country">
              <option>SELECT</option>
              <option defaultValue="selected" value="United States">
                United States
              </option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="dropdown-container">
            <Label for="state">State</Label>
            <Input className="custom-select" type="select" name="state">
              <option>SELECT</option>
              <option value="TX">Texas</option>
              <option value="NY">New york</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="zipcode">Zip</Label>
            <Input
              className="zip-input"
              type="text"
              name="zipcode"
              placeholder="ZIP Code"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          type="number"
          max={10}
          name="phone"
          placeholder="Mobile number (For Shipping Updates)"
        />
      </FormGroup>
    </div>
  </Form>
);
