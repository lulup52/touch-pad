import React, { useState, useEffect } from 'react';
import '../css/testcaroussel.css';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu'




export default class BlackSquare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    onNext = () => {
        console.log('next')
        let nextComp = document.querySelector('.left') 
        console.log(nextComp)
    }
    onPrev = () => {
        console.log('prev')

    }



    render() {
        
    return (      

        <div className="mainPage">
            <HeaderMenu />
            <div className='trad'>
                <div className='textOriginal'>
                    <p>Text Anglais :</p>
                    <textarea name="textOriginal" id="" ></textarea>
                </div>
                <div className='tradFr'>
                    <p>Trad FR :</p>
                    <textarea name="tradFr" id="" ></textarea>
                </div>
            </div>
        </div>
    );
    }
}




