import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import codeLogo from "../../../assets/images/Icon_Code.png";

function Header() {
  return (
    <Navbar className="navbar-container" color="light" light expand="md">
      <NavbarBrand href="/">
        <img className="img-fluid" src={codeLogo} alt="" /> Stripe checkout demo
      </NavbarBrand>
      <Collapse navbar className="flex-grow-0">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="https://github.com/siddharthsathe/stripe-javascript-demo"
              target="_blank"
            >
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
