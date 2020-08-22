import React from 'react';
import database from '../data/database';
import './menu.css';
import { Link } from 'react-router-dom';

var audio = new Audio('../data/sounds/crash_leger-SF.mp3');

function Menu() {
  audio.play();

  return (
    <div className="mainPage">
        <div className='divTitle'>
            <div className='title'>All sounds</div>
        </div> 
       <div >
       <p>Click the buttons to play or pause the audio.</p>

          <button onclick="playAudio()" type="button">Play Audio</button>
          <button onclick="pauseAudio()" type="button">Pause Audio</button> 

          <script>
          {let x = document.getElementById("myAudio"); 

          function playAudio() { 
            x.play()
          } 

          function pauseAudio() { 
            x.pause()
          } 
          }
          </script>
       </div>
       
    </div>
  );
}

export default Menu;
