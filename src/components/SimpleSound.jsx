import React, { useState, useEffect } from 'react';
import './css/simpleSound.css';
import { Link } from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
 

// data.from = sound adress





function SimpleSound(props) {
    const {data} = props
    const {i} = props
    const {handlePlayPause} = props
    console.log(data.from)

    const audioTune = new Audio(data.from);
  // console.log(audioTune, 'bibibibibibi')



    useEffect(() => {
      audioTune.load();

    }, [])
    
  
    const playSound = () => {
    if (!props.isPlaying) {
      audioTune.play();
      console.log(audioTune.paused)
      props.handleSetIsPlaying(audioTune.paused)

      } 
    }
     
    // pause audio sound
    const pauseSound = () => {
    audioTune.pause();
    console.log(audioTune.paused)
    props.handleSetIsPlaying(audioTune.paused)

    }
     
    // stop audio sound
    const stopSound = () => {
      audioTune.pause();
      audioTune.currentTime = 0;
    }

  return (
    
    <div className="soundWidget">
        <div>{data.name}</div>
        
        <div className="App">
        
  
        <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound}></input>
        <input type="button" className="btn btn-warning mr-2" value="Pause" onClick={pauseSound}></input>
        <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound}></input>
  
      </div>
    </div>
  );
}

export default SimpleSound;
