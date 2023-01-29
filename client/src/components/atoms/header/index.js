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
        <img className="img-fluid" src={codeLogo} alt="" /> Checkout Form
      </NavbarBrand>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#" target="_blank">
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" target="_blank">
              GitHub
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" target="_blank">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
