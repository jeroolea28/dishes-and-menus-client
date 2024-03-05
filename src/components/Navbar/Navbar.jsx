import React from "react";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const MainNavbar = () => {

  const { user, isLoggedIn, logout } = useContext(AuthContext)


  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed= 'top' expand="lg" className="bg-body-tertiary">
      <NavLink to='/' className='navbar-brand'>Dishes and Menus</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="NavbarSpacing">
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
              <NavDropdown.Item href="#action/3.1">Dish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Menu</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="My Creations" id="creations-dropdown">
              <NavDropdown.Item href="#action/3.1">My Dishes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My Menus</NavDropdown.Item>
            </NavDropdown>

            <div className="nav-link">Good to see you {user.username}!</div>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;