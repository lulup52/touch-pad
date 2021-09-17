import React from 'react';
import HeaderMenu from '../HeaderMenu'
import '../css/animation.css';


export default function TestCss() {

    const animateSlider = (id) => {
        let circle = document.getElementById(`circle${id}`)
        circle.classList.add("circleClicked")
    }
    
    return (      
  
        <div className="mainPage">
            <HeaderMenu/>
            <div id="slider" className="slider">
                <div id="textContainer" className="textContainer" onClick={()=>animateSlider(1)} >première animation
                    <div id="circle1" className="circle cicle-top"></div>
                </div>
            </div>
            <div id="slider" className="slider">
                <div id="textContainer" className="textContainer" onClick={()=>animateSlider(2)} >2eme animation
                    <div id="circle2" className="circle cicle-left"></div>
                </div>
            </div>
            <div id="slider" className="slider">
                <div id="textContainer" className="textContainer" onClick={()=>animateSlider(3)} >3eme animation
                    <div id="circle3" className="circle cicle-bot"></div>
                </div>
            </div>
        </div>
    );
}
  
