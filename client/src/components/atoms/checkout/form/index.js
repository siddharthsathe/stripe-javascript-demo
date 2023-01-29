import React from "react";
import { Col, Row, Form, FormGroup, Input, Label, Button } from "reactstrap";

export const CheckoutForm = () => (
  <Form className="container-fluid contact-info-container">
    <h2 className="mb-3">Contact Information</h2>

    <div>
      <FormGroup>
        <Input
          type="email"
          name="co_email"
          id="coContactEmail"
          placeholder="Email (For Order Confirmation)"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Input
              type="text"
              name="co_first_name"
              id="coFirstName"
              placeholder="First name"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              type="text"
              name="co_last_name"
              id="coLastName"
              placeholder="Last name"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          type="text"
          name="co_address"
          id="coAddress"
          placeholder="Address"
        />
      </FormGroup>
      <FormGroup>
        <div className="toggle-container address2-text">
          <Input
            type="text"
            name="co_address2"
            id="coAddress2"
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Input type="text" name="co_city" id="coCity" placeholder="City" />
      </FormGroup>
      <Row form>
        <Col md={5}>
          <FormGroup className="dropdown-container">
            <Label for="coCountry">Country</Label>
            {/* <CountryOptions /> */}
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="dropdown-container">
            <Label for="coState">State</Label>
            {/* <StateOptions /> */}
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="coZip">Zip</Label>
            <Input
              className="zip-input"
              type="text"
              name="co_zipcode"
              id="coZipCode"
              placeholder="ZIP Code"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          type="phone"
          name="co_phone"
          placeholder="Mobile number (For Shipping Updates)"
        />
      </FormGroup>
      <div className="button-right">
        <Button color="primary">Save</Button>
      </div>
    </div>
  </Form>
);
