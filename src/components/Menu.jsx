import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="mainPage">
        <div className='divTitle'>
            <div className='title'>menu</div>
        </div> 
       <div className='menu'>
            <Link type='button' className='choiMenu' to='/allsounds'>
                <div>All sounds</div>
            </Link> 
            <button type='button' className='choiMenu'>
                <div>My pads</div>
            </button> 
       </div>
       
    </div>
  );
}

export default Menu;
