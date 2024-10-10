import React from 'react';
import { Link } from 'react-router-dom';
import './navbarstyle.css';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Teams</Link></li>
        <li><Link to="/nation">Nations</Link></li>
        <li><Link to="/position" >Positions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
