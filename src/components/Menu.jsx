import React from 'react';
import './css/menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="mainPage">
        <div className='divTitle'>
            <div className='title'>menu</div>
        </div> 
       <div className='menu'>
            <Link className='choiMenu' to='/allsounds'>
                <div>All sounds</div>
            </Link> 
            <Link className='choiMenu' to='/mypads'>
                <div>My pads</div>
            </Link> 
            <Link className='choiMenu' to='/blackSquare'>
                <div>blacksquare tests</div>
            </Link> 
            <Link className='choiMenu' to='/jeudechec'>
                <div>chest</div>
            </Link> 
            <Link className='choiMenu' to='/demineur'>
                <div>Démineur</div>
            </Link> 
            
           
       </div>
       
    </div>
  );
}

export default Menu;
