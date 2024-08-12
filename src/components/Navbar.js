import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';
import { ReactComponent as File } from '../assets/file.svg';
import { ReactComponent as Hamburger } from '../assets/hamburger.svg';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Hamburger />
        <File />
      </div>
      <div className='navbar-right'>{/* add content */}</div>
    </nav>
  );
}

export default Navbar;
