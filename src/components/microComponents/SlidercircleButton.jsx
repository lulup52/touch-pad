import React from 'react';
import HeaderMenu from '../HeaderMenu'
import '../css/sass/animation.css';

export default function SlidercircleButton({id,content, style}) {

    const animateSlider = (id) => {
        let circle = document.getElementById(`circleContainer${id}`)
        circle.classList.add("circleContainerClicked")

        
        setTimeout(function() {
            document.getElementById('buttonRoundContainer').style.transition = "500ms"
            document.getElementById('buttonRoundContainer').style.opacity = "0"
            setTimeout(function() {       
                window.location.reload(false);
             }.bind(this), 500)



        }.bind(this), 1000)

    }
    
    return (      
  
        <>
            <div className="circleleFond" onClick={() => animateSlider(id)}>
                <p>
                    {content}
                </p>
                <div className={`circleContainer ${style}`}  id={`circleContainer${id}`}>
                    <div id={`circleRoundButton${id}`} className={`circle`}></div>
                </div>
            </div>
        </>
    );
}
  
