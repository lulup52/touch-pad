import React from 'react';
import HeaderMenu from '../HeaderMenu'
import '../css/sass/animation.css';

export default function SliderRectangleButton({id,content, style}) {

    const animateSlider = (id) => {
        console.log(`circle${id}`)
        let circle = document.getElementById(`circle${id}`)
        circle.classList.add("circleClicked")

        document.getElementById('buttonRectangleContainer').style.transition = "500ms"
        document.getElementById('buttonRectangleContainer').style.opacity = "0"
        setTimeout(function() {
            window.location.reload(false);
        }.bind(this), 1000)

    }
    
    return (      
  
        <>
            <div className="rectangleFond" onClick={() => animateSlider(id)}>
                <p>
                    {content}
                </p>
                <div className="rectangleBorder">
                </div>
                <div id={`circle${id}`} className={`${style}`}></div>
            </div>
        </>
    );
}
  
