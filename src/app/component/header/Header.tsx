import * as React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';


const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">PS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/sign-up">Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
