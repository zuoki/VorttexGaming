// Trailer.js
import React from 'react';
import './Trailer.css'

const Trailer = (/* { game } */ {video} ) => {
  return (
    <div className="trailer-container">
      <iframe width="100%" height="100%" src=/* {game.video} */{video} allow="autoplay" allowFullScreen style={{ border: '0px' }} ></iframe>
    </div>
  );
};

export default Trailer;
