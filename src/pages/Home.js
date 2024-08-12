import React from 'react';
import Navbar from '../components/Navbar';
import Prompt from '../components/Prompt';
import Cards from '../components/Cards';
import { ReactComponent as Logo } from '../assets/logo.svg';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className='title'>
        <Logo />
        <h1>ChatSphere</h1>
      </div>
      <Prompt />
      <Cards />
    </>
  );
}

export default Home;
