import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import logo from "../../../images/logo2.png";
const Header = () => {
  const style1 = {
    paddingTop: "30px",
    color: "white",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navber navbar-light"
    >
      <Container>
        <Navbar.Brand href="/home" className="logo">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="/gym" style={{ color: "white" }}>
              Participting <br />
              Gyms & Studios
            </Nav.Link>
            <Nav.Link href="/price" style={style1}>
              Pricing
            </Nav.Link>
            <Nav.Link
              href="https://www.eventbrite.com/e/free-food-beverages-tickets-143397942105 "
              id="testimonials"
              style={{ color: "white" }}
            >
              Upcoming <br /> Events
            </Nav.Link>
            <Nav.Link href="/trainer" style={{ color: "white" }}>
              Personal <br />
              Trainers
            </Nav.Link>
            <Nav.Link href="/price" style={style1}>
              Sign Up
            </Nav.Link>
            <Nav.Link href="/login" style={style1}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
