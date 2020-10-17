import React, { useState } from 'react';
import './css/simpleSound.css';
import { Link } from 'react-router-dom';


// data.from = sound adress

function SimpleSound(props) {
    const {data} = props
    const {i} = props
    const {handlePlayPause} = props


  

  return (
    <div className="soundWidget" onClick={() => handlePlayPause(data.name)}>
        <div>{data.name}</div>
      
    </div>
  );
}

export default SimpleSound;
