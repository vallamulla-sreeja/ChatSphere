import React from 'react';
import '../styles/Cards.css';

const cardsData = [
  'Complete my travel blog tagline: explore, discover, and...',
  'Suggest innovative tech gadgets, with key features and drawbacks',
  'Plan engaging icebreakers for our virtual conference.',
  'Outline a marketing strategy for launching our new app.',
];

const Cards = () => {
  return (
    <div className='cards'>
      {cardsData.map((text, index) => (
        <div className='card' key={index}>
          {text}
        </div>
      ))}
    </div>
  );
};

export default Cards;
