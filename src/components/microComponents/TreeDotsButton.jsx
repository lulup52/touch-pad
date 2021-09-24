import React from 'react';
import { MdShoppingCart, MdRemoveRedEye, MdLibraryBooks } from "react-icons/md";

import HeaderMenu from '../HeaderMenu'
import '../css/sass/animation.css';

export default function TreeDotsButton({id,content, style}) {

  
    
    return (      
  
        <>
            <div className="treeDotsButtonContainer">
                <div className="buttonContainer">
                   <div className="button bOne"><i><MdRemoveRedEye /></i></div>
                   <div className="button bTwo"><i><MdShoppingCart /></i></div>
                   <div className="button bThree"><i><MdLibraryBooks /></i></div>
                </div>

            </div>
        </>
    );
}
  
