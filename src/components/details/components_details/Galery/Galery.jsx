"use client"
import React, { useState } from 'react';
import './Galery.css';

const Galery = ({ game }) => {
  const [expanded, setExpanded] = useState(false);

  const handleImageClick = () => {
    setExpanded(!expanded);
  };

  const handleCloseClick = () => {
    setExpanded(false);
  };

  return (
    <div className="GaleryContainer">
      <div className='contIMG'>
        <img src={game.image} alt="caratula" className='caratulaD1' />
      </div>
      <h3 className='textG'>CAPTURE</h3>
      <img className='capturaD' src={game.capture} alt="captura" onClick={handleImageClick} />

      {expanded && (
        <div className="fullscreen-overlay" onClick={handleCloseClick}>
          <span className="close-button">&times;</span>
          <img className="expanded-image"src={game.capture} alt="captura" />
        </div>
      )}
    </div>
  );
};

export default Galery;

