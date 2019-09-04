import React from 'react';

import logo from '../../assets/logo.svg';
import redux from '../../assets/redux.svg';
import github from '../../assets/github.svg';

import '../../assets/styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <img src={logo} className="App-logo-react" alt="logo" />
    <img src={redux} className="App-logo-redux" alt="redux" />
    <a className="sc" href="http://sebastiancardoso.com">sc</a>
    <a href="https://github.com/sebaveg/Reversi-game">
      <img src={github} className="App-logo-github" alt="github" />
    </a>
  </footer>
);

export default Footer;
