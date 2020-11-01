// ce test corespond à l'epérience n°1 du fichier "testFonction"
import React, { useState, useEffect } from 'react';
import '../css/test.css';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu'


function BlackSquare() {
    const [board, setBoard] = useState([''])
    const boardDimension = 4

/*-------------------Création du tableau vierge---------------------*/
    useEffect( () => {
        let table =[]
        let tableRow =[]
        
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

      const handleSwitchColor = (e) => {
        //fonctionement simple de changement de couleur de la case sélectionée
        // if(e.target.classList.contains('caseWithe')) {
        //     e.target.classList.remove("caseWithe");
        //     e.target.classList.add("blackCase")
        // } else {
        //     e.target.classList.remove("blackCase");
        //     e.target.classList.add("caseWithe")
        // }
        
        //fonctionement avancé de changement de couleur : les cases adjacente changent de couleur

        let coordonee = [parseInt(e.target.value[0]), parseInt(e.target.value[1])]
        if(coordonee[1] <= (boardDimension - 1) && coordonee[1] >=0 && coordonee[0] <= (boardDimension - 1) && coordonee[0] >=0) {
            if(e.target.classList.contains('caseWithe')) {
                e.target.classList.remove("caseWithe");
                e.target.classList.add("blackCase")
            } else {
                e.target.classList.remove("blackCase");
                e.target.classList.add("caseWithe")
            }

            board.map(row => 
                row.row.map(Case => {
                    let caseCoordonee = [parseInt(Case.case[0]), parseInt(Case.case[1]) ]
                        if (caseCoordonee[0] === coordonee[0]  && caseCoordonee[1] === coordonee[1] + 1) {
                            if(document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.contains('caseWithe')) {

                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("caseWithe");
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("blackCase");
                            }  else { 
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("blackCase");
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("caseWithe");
                            }
                            
                        }
                        if (caseCoordonee[0] === coordonee[0]  && caseCoordonee[1] === coordonee[1] - 1) {
                            if(document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.contains('caseWithe')) {
                                
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("caseWithe");
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("blackCase");
                            }  else { 
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("blackCase");
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("caseWithe");
                            }
                        }
                        if (caseCoordonee[0] === coordonee[0] -1 && caseCoordonee[1] === coordonee[1] ) {
                            if(document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.contains('caseWithe')) {
                                
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("caseWithe");
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("blackCase");
                            }  else { 
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("blackCase");
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("caseWithe");
                            }

                        }
                        if (caseCoordonee[0] === coordonee[0] + 1 && caseCoordonee[1] === coordonee[1] ) {
                            if(document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.contains('caseWithe')) {
                                
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("caseWithe");
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("blackCase");
                            }  else { 
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.remove("blackCase");
                                document.getElementById(`${caseCoordonee[0]}${caseCoordonee[1]}`).classList.add("caseWithe");
                            }
                        }
                    }
                )) 
            }


            
                
        }
        

    


      



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

                    kase.case.includes('22') ? 
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
    </div>
  );
}

export default BlackSquare;





{/* 
-----oartie pour test avec controles
<div className='controle'>
    <button type='button'>
        haut
    </button>
    <button type='button'>
        bas
    </button>
    <button type='button'>
        gauche
    </button>
    <button type='button'>
        droite
    </button>
</div> */}