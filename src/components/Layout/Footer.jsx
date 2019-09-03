import React from 'react';

import logo from '../../assets/logo.svg';
import redux from '../../assets/redux.svg';

import '../../assets/styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <img src={logo} className="App-logo-react" alt="logo" />
    <img src={redux} className="App-logo-redux" alt="redux" />
  </footer>
);

export default Footer;
