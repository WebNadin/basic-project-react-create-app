import React, { Component } from 'react';
//import './main.scss';
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="bg-dark">
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/second-page'>Second page</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;