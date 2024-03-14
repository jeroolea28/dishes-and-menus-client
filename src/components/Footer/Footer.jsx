import React from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from './../../assets/github.png';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white', padding: '20px', alignContent: 'center' }}>
      <p style={{ fontSize: '1rem' }}>Dishes & Menus | <Link to='https://github.com/jeroolea28/dishes-and-menus-client'><img src={GithubLogo} alt="GitHub" style={{ width: '20px', height: '20px' }} /></Link></p>
    </footer>
  );
}

export default Footer;
