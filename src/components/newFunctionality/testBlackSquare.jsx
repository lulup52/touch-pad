// ce test corespond à l'epérience n°1 du fichier "testFonction"
import React, { useState, useEffect } from 'react';
import MoovableBlackSquare from "./MoovableBlackSquare"
import ClickableBlackSquare from "./ClickableBlackSquare.jsx"
import '../css/test.css';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu'


function BlackSquare() {
   
  return (      

    <div className="blackSquareApp">
        <HeaderMenu />
        <div className='squareGamesContainer'>
            <ClickableBlackSquare />
            <MoovableBlackSquare />

        </div>
            
        
    </div>
  );
}

export default BlackSquare;



