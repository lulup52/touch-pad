import React, { useState } from 'react';
import database from '../components/data/database';
import './css/allSounds.css';
import { Link } from 'react-router-dom';
import SimpleSound from './SimpleSound'
import HeaderMenu from './HeaderMenu'


function Menu() {
  const [isPlaying, setIsPlaying] =  useState(false);


  const handleSetIsPlaying = (val) => {
    setIsPlaying(val)
  }

  return (
    <div className="mainPage">
      <HeaderMenu />
      <div className='divTitle'>
          <div className='title'>All sounds</div>
      </div> 
      <div className='soundsList'>
        {
          database[0].sounds.map((sound, i) => <SimpleSound i={i} handleSetIsPlaying={handleSetIsPlaying} isPlaying={isPlaying} data={sound}/>)
        }
      </div>
       
       
    </div>
  );
}

export default Menu;
