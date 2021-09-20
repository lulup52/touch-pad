import React from 'react';
import HeaderMenu from '../HeaderMenu'
import '../css/sass/animation.css';
import SliderRectangleButton from '../microComponents/SliderRectangleButton'

export default function TestCss() {

    
    return (      
  
        <div className="secondPage">
            <HeaderMenu/>


            <div id="buttonRectangleContainer">

              <SliderRectangleButton content={"test1"} id={"1"} style={"circle circle-top"}/>
              <SliderRectangleButton content={"test2"} id={"2"} style={"circle"}/>
              <SliderRectangleButton content={"test3"} id={"3"} style={"circle circle-bot"}/>
               

            </div>
        </div>
    );
}
  
