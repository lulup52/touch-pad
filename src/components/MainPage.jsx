import React from 'react';
import './css/mainPage.css';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="mainPage">
        <div >
            <button type='button' className='mainTitle' >welcome in the main page</button>
        </div>
        <div className='vh40'>
            <Link className='mainNextButton'to='/menu' >Next</Link>
        </div>
        
    </div>
  );
}

export default MainPage;
