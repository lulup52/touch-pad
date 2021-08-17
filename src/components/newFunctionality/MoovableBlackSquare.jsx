// ce test corespond à l'epérience n°1 du fichier "testFonction"
import React, { useState, useEffect } from 'react';
import '../css/test.css';
import { Link } from 'react-router-dom';


function BlackSquare() {
    const [board, setBoard] = useState([''])
    const boardDimension = 4
    const startCase = '22'
    const [curentCase, setCurentCase] = useState('')
    const [mode, setMode] = useState('BASIC')

    

/*-------------------Création du tableau vierge---------------------*/
    useEffect( () => {
        let table =[]
        let tableRow =[]
        setCurentCase(startCase) // case de départ renséignée
        
        for (let i=0; i< boardDimension; i++ ) {
             let tableRow =[]
            for (let j=0; j< boardDimension; j++ ) {
                const item = {case : `${i}${j}`}
                tableRow.push(item)
            }
            table.push({row : tableRow})
        }
        setBoard(table)
      }, [])
      /*---------------------------le tableau ests crée----------------------------------------*/

        
 /*---------------------------controle haut bas droite gauche fonctionnel----------------------------------------*/

        const moveUp = () => {
            let upCase =`${parseInt(curentCase[0]) - 1}${parseInt(curentCase[1])}`
            if(upCase[1] <= (boardDimension - 1) && upCase[1] >=0 && upCase[0] <= (boardDimension - 1) && upCase[0] >=0) {
                console.log(upCase)   
                setCurentCase(upCase)
            } 

        }

        
        const moveRight = () => {
            console.log('Right')       
            let rightCase =`${parseInt(curentCase[0])}${parseInt(curentCase[1]) + 1}`
            if(rightCase[1] <= (boardDimension - 1) && rightCase[1] >=0 && rightCase[0] <= (boardDimension - 1) && rightCase[0] >=0) {
                console.log(rightCase)   
                setCurentCase(rightCase)
            } 
        }

        const moveDown = () => {
            console.log('Down')       
            let downCase =`${parseInt(curentCase[0]) + 1}${parseInt(curentCase[1])}`
            console.log(downCase)  
            if(downCase[1] <= (boardDimension - 1) && downCase[1] >=0 && downCase[0] <= (boardDimension - 1) && downCase[0] >=0) {
                console.log(downCase)   
                setCurentCase(downCase)
            } 

        }

        const moveLeft = () => {
            console.log('Left')      
            let leftCase =`${parseInt(curentCase[0])}${parseInt(curentCase[1]) -1}`
            if(leftCase[1] <= (boardDimension - 1) && leftCase[1] >=0 && leftCase[0] <= (boardDimension - 1) && leftCase[0] >=0) {
                console.log(leftCase)   
                setCurentCase(leftCase)
            } 

        }

        
/*---------------------------**fin controle haut bas droite gauche fonctionnel**----------------------------------------*/




  return (      

    <div className="tableContainer">
        <p>Déplacez la case noir via les 4 bouton en dessous du tableau</p>
        <div className='tableau'>
            {
            board === undefined ? '' 
            :
                board.map((row, key) => row.row === undefined ? "" 
                :  
                <div className='row'>
                    {row.row.map((kase) => 
                    /*liste de boutons*/ 

                    kase.case.includes(curentCase) ? 
                        <button id={kase.case} type='button' value={kase.case} className='blackCase' >
                            {kase.case}
                        </button>
                    :
                        <button id={kase.case} type='button' value={kase.case} className='caseWithe' >
                            {kase.case}
                            
                        </button>
                    )}
                </div>)
        
            }   
        </div>
        <div className='control'>
            <div>
                <button className='mooveButton' type='button' onClick={() => moveUp()}>
                    haut
                </button>
            </div>
            <div>
                <button className='mooveButton' type='button' onClick={() => moveLeft()}>
                    gauche
                </button>
                <button className='mooveButton' type='button' onClick={() => moveRight()}>
                    droite
                </button>
            </div>            
            <div>
            <button className='mooveButton' type='button' onClick={() => moveDown()}>
                bas
            </button>
            </div>
           
            
            
           
        </div>
    </div>
  );
}

export default BlackSquare;



