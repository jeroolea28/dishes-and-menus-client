import React from "react";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";

const MainNavbar = () => {
  const { user, isLoggedIn, logout } = useContext(AuthContext)

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Dishes and Menus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="NavbarSpacing justify-content-between">
          <Nav className="me-auto">
            { !isLoggedIn && (
              <>
              <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
              <NavLink to={'/signup'} className={'nav-link'}>Signup</NavLink>
              </>
            )}
            { isLoggedIn && (
              <>
              <button onClick={logout} className="nav-link">Logout</button>
              <NavDropdown title="Create" id="create-dropdown">
                <NavDropdown.Item as={Link} to={'/dish/create'}>Dish</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/menu/create'}>Menu</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="My Creations" id="creations-dropdown">
                <NavDropdown.Item as={Link} to={'/allDishes'}>My Dishes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">My Menus</NavDropdown.Item>
              </NavDropdown>
              <div className="nav-link">Good to see you {user.username}!</div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
