import React from 'react';
import './css/headerMenu.css';
import { Link } from 'react-router-dom';


function HeaderMenu(props) {
    const {data} = props
  return (
    <div className="headerMenu">
        <Link to='/menu'><button type='button'>{`<-`}</button></Link>
      
    </div>
  );
}

export default HeaderMenu;




