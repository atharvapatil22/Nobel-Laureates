import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <div className="navbarContainer">
      <Navbar bg="dark" expand="lg" className="navBar">
        <Navbar.Brand href="/">
          <p className="brandName"> Nobel Laureates List</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <p className="links">Home</p>
            </Nav.Link>
            <Nav.Link href="/multiple-winners">
              <p className="links">Multiple Winners</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
