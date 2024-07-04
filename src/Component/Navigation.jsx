// src/Component/Navigation.jsx

import React, { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartContext from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function Navigation() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">SHOPCART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <LinkContainer to="/category/beauty">
                <NavDropdown.Item>Beauty</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/fragrances">
                <NavDropdown.Item>Fragrances</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/furniture">
                <NavDropdown.Item>Furniture</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/groceries">
                <NavDropdown.Item>Groceries</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart /> Cart <span className="badge bg-danger">{cart.length}</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create-account">
              <Nav.Link className="btn btn-warning text-white">Create Account</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
