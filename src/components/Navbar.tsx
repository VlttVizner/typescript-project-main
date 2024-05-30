import React, { useState } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const navLinkStyle = {
  color: "#082567",
  fontSize: "1.25rem",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  transition: "color 0.3s ease",
};

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} className="nav-link" style={navLinkStyle}>
            Главная
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="nav-link" style={navLinkStyle}>
            Меню
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="nav-link" style={navLinkStyle}>
            О нас
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{
              backgroundColor: isHovered ? "#082567" : "transparent",
              borderColor: "#082567",
              color: isHovered ? "#white" : "transparent",
              width: "3rem",
              height: "3rem",
              position: "relative",
            }}
            variant="#082567"
            className="rounded-circle"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 902.86 902.86"
              fill={isHovered ? "white" : "#082567"}
              stroke="#082567"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="1.5rem"
              height="1.5rem"
            >
              <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829zM685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
            </svg>
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#800000",
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}





