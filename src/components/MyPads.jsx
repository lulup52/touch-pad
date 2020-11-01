import React from 'react';
import database from '../components/data/database';
import './css/allSounds.css';
import { Link } from 'react-router-dom';

import HeaderMenu from './HeaderMenu'

function Menu() {


  return (
    <div className="mainPage">
      <HeaderMenu />
      <div className='divTitle'>
          <div className='title'>My Pads</div>
      </div> 
      <div className='soundsList'>
        {
          database[1].playliste.map((playliste) => <button className='soundButton'>{playliste.name} </button>)
        }
      </div>
       
       
    </div>
  );
}

export default Menu;
