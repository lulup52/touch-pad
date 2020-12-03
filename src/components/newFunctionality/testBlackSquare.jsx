// ce test corespond à l'epérience n°1 du fichier "testFonction"
import React, { useState, useEffect } from 'react';
import '../css/test.css';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu'


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
      
      /*---------------------------fonctionement simple de changement de couleur de la case sélectionée----------------------------------------*/
      const handleSwitchColor = (e) => {
    
        // if(e.target.classList.contains('caseWithe')) {
        //     e.target.classList.remove("caseWithe");
        //     e.target.classList.add("blackCase")
        // } else {
        //     e.target.classList.remove("blackCase");
        //     e.target.classList.add("caseWithe")
        // }
        
        //fonctionement avancé de changement de couleur : les cases adjacente changent de couleur

        // let coordonee = [parseInt(e.target.value[0]), parseInt(e.target.value[1])]
        // if(coordonee[1] <= (boardDimension - 1) && coordonee[1] >=0 && coordonee[0] <= (boardDimension - 1) && coordonee[0] >=0) {
        //     if(e.target.classList.contains('caseWithe')) {
        //         e.target.classList.remove("caseWithe");
        //         e.target.classList.add("blackCase")
        //     } else {
        //         e.target.classList.remove("blackCase");  
        //         e.target.classList.add("caseWithe")
        //     }

        //     board.map(row => 
        //         row.row.map(Case => {
        //             let caseCoordonee = [parseInt(Case.case[0]), parseInt(Case.case[1]) ]
        //                 if (caseCoordonee[0] === coordonee[0]  && caseCoordonee[1] === coordonee[1] + 1) {
        //                     if(document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.contains('caseWithe')) {

        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("caseWithe");
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("blackCase");
        //                     }  else { 
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("blackCase");
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("caseWithe");
        //                     }
                            
        //                 }
        //                 if (caseCoordonee[0] === coordonee[0]  && caseCoordonee[1] === coordonee[1] - 1) {
        //                     if(document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.contains('caseWithe')) {
                                
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("caseWithe");
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("blackCase");
        //                     }  else { 
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("blackCase");
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("caseWithe");
        //                     }
        //                 }
        //                 if (caseCoordonee[0] === coordonee[0] -1 && caseCoordonee[1] === coordonee[1] ) {
        //                     if(document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.contains('caseWithe')) {
                                
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("caseWithe");
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("blackCase");
        //                     }  else { 
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("blackCase");
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("caseWithe");
        //                     }

        //                 }
        //                 if (caseCoordonee[0] === coordonee[0] + 1 && caseCoordonee[1] === coordonee[1] ) {
        //                     if(document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.contains('caseWithe')) {
                                
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("caseWithe");
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("blackCase");
        //                     }  else { 
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("blackCase");
        //                         document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("caseWithe");
        //                     }
        //                 }
        //             }
        //         )) 
        //     }


            
                
        }
        
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

    <div className="mainPage">
        <HeaderMenu />
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
                        <button id={kase.case} type='button' value={kase.case} className='blackCase' onClick={(e) => handleSwitchColor(e)}>
                            {kase.case}
                        </button>
                    :
                        <button id={kase.case} type='button' value={kase.case} className='caseWithe' onClick={(e) => handleSwitchColor(e)}>
                            {kase.case}
                            
                        </button>
                    )}
                </div>)
        
            }   
        </div>
        <div className='controle'>
            <button type='button' onClick={() => moveUp()}>
                haut
            </button>
            <div>
                <button type='button' onClick={() => moveLeft()}>
                    gauche
                </button>
                <button type='button' onClick={() => moveRight()}>
                    droite
                </button>
            </div>
            <button type='button' onClick={() => moveDown()}>
                bas
            </button>
           
        </div>
    </div>
  );
}

export default BlackSquare;



