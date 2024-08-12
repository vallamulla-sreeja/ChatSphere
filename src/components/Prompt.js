import React from 'react';
import { ReactComponent as Mic } from '../assets/mic.svg';
import { ReactComponent as Attach } from '../assets/attach.svg';
import { ReactComponent as Send } from '../assets/send.svg';
import '../styles/Prompt.css';

function Prompt() {
  return (
    <div className='prompt'>
      <div className='prompt-box'>
        <Mic />
        <input type='text' placeholder='Explore with ChatSphere' />
        <Attach />
      </div>
      <button className='btn send'>
        <Send />
      </button>
    </div>
  );
}

export default Prompt;
