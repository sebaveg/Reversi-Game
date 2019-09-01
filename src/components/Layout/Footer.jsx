import React from 'react';

import logo from '../../assets/logo.svg';
import redux from '../../assets/redux.svg';

import '../../assets/styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <img src={logo} className="App-logo" alt="logo" />
    <img src={redux} className="App-logo" alt="redux" />
  </footer>
);

export default Footer;
