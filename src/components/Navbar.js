import React from 'react';
import '../styles/Navbar.css';
import { ReactComponent as File } from '../assets/file.svg';
import { ReactComponent as Hamburger } from '../assets/hamburger.svg';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Hamburger />
        <File />
        <select className='navbar-select'>
          <option value='Option 1'>Gemini</option>
          <option value='Option 2'>Claude</option>
          <option value='Option 3'>GPT</option>
          <option value='Option 3'>Llama</option>
        </select>
      </div>
      <div className='navbar-right'>{/* add content */}</div>
    </nav>
  );
}

export default Navbar;
