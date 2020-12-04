// ce test corespond à l'epérience n°1 du fichier "testFonction"
import React, { useState, useEffect } from 'react';
import '../css/chest.css';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu'


function JeuDechec() {
    const [board, setBoard] = useState([''])
    const boardDimension = 8
    const [selecPiece, setSelecPiece] = useState('')
    const [selecPiecePos, setSelecPiecePos] = useState('')
    const [selecPieceDest, setSelecPieceDest] = useState('')
    const [isPieceSelected, setIsPieceSelected] = useState(false)


    

/*-------------------Création du tableau ---------------------*/
    useEffect( () => {
        boardInit()
      }, [])




    const boardInit = () => {
    
    let table =[]
    let tableRow =[]
    
    for (let i=1; i<= boardDimension; i++ ) {
         let tableRow =[]
        for (let j=1; j<= boardDimension; j++ ) {
            const item = {case : `${i}${j}`, state : "caseWithe" }
            tableRow.push(item)
        }   
        table.push({row : tableRow})
    }
//---------------------------- création pièces ------------------------------------/ 
    table.map(e => e.row.map(a=> {
        
// --------------------------- création pièces blanches --------------------------/
        if (a.case.includes('11')) {
            a.piece = 'TourBlancG'
        }
        if (a.case.includes('12')) {
            a.piece = 'CavaBlancG'
        }
        if (a.case.includes('13')) {
            a.piece = 'FouBlancG'
        }
        if (a.case.includes('14')) {
            a.piece = 'RoiBlanc'
        }
        if (a.case.includes('15')) {
            a.piece = 'DameBlanc'
        }
        if (a.case.includes('16')) {
            a.piece = 'FouBlancD'
        }
        if (a.case.includes('17')) {
            a.piece = 'CavaBlancD'
        }
        if (a.case.includes('18')) {
            a.piece = 'TourBlancD'
        }
        if (parseInt(a.case) >= 21 && parseInt(a.case) <= 28 ) {
            a.piece = `PionBlanc${a.case[1]}`

        }

// --------------------------- création pièces noires --------------------------/            
        if (a.case.includes('81')) {
            a.piece = 'TourNoirG'
        }
        if (a.case.includes('82')) {
            a.piece = 'CavaNoirG'
        }
        if (a.case.includes('83')) {
            a.piece = 'FouNoirG'
        }
        if (a.case.includes('84')) {
            a.piece = 'RoiNoir'
        }
        if (a.case.includes('85')) {
            a.piece = 'DameNoir'
        }
        if (a.case.includes('86')) {
            a.piece = 'FouNoirD'
        }
        if (a.case.includes('87')) {
            a.piece = 'CavaNoirD'
        }
        if (a.case.includes('88')) {
            a.piece = 'TourNoirD'
        }
        if (parseInt(a.case) >= 71 && parseInt(a.case) <= 78 ) {
            a.piece = `PionNoir${a.case[1]}`

        }
        console.log(a)
    }
    ))
    setBoard(table)
}
/*---------------------------fin creation tableau (plateau)----------------------------------------*/



/*-------------------verification si la pièce et sélectionée et jouable ------------*/

    const handlePieceMove = async (e, pos, piece) => {
        board.map(r => r.row.map(c => c.state = "caseWithe"))
        selectionPiece(e, pos, piece) 
        ChosePieceDest(e, pos)
        posibleMoves(pos, piece)
      
    }

/*---------------------------gestion de la sélection des pièces----------------------------------------*/
    const selectionPiece = (e, pos, piece)  =>  {
        if (piece !== undefined && piece !== '') {

            setSelecPiece(e.target.id)
            setSelecPiecePos(pos)
            setSelecPieceDest("")

            // console.log(`jai sélectioné la pièce ${e.target.id}, sur la case ${pos}` )
        }
        
        
    }

/*---------------------------affichage des mouvements possibles ------------------------------------*/

    const posibleMoves = (pos, piece) => {
        board.map(r=> r.row.map(c=> {
            if (piece !== undefined) {
                
                // deplacement pion blanc
                if (piece.includes('PionBlanc')) {
                    if (c.piece === undefined) {

                        if (parseInt(c.case) === parseInt(pos) + 10 || parseInt(c.case) === parseInt(pos) + 20 ) {
                            c.state = 'selectable'
                        }
                    }
                }
                // deplacement pion noir
                if (piece.includes('PionNoir')) {
                    if (c.piece === undefined) {

                        if (parseInt(c.case) === parseInt(pos) - 10 || parseInt(c.case) === parseInt(pos) - 20 ) {
                            c.state = 'selectable'
                        }
                    }
                }
            }
        }))
            
    }
/*---------------------------gestion de la destination de la pièce sélectionée----------------------------------------*/

    const ChosePieceDest = async(e, pos) => {
        let newPos = ""
        if (selecPiece !== '' && e.target.id === '') {
    /*------------------------------déplacement pion noir-----------------------------------*/
            if (selecPiece.includes('PionNoir')) {
                if (parseInt(selecPiecePos[0]) > parseInt(pos[0]) && parseInt(pos[0]) >= parseInt(selecPiecePos[0]) - 2 && parseInt(selecPiecePos[1]) === parseInt(pos[1])) {
                    newPos = pos
                    await setSelecPieceDest(newPos)
                    pieceMove(newPos, selecPiece)
                }
            }
    /*------------------------------déplacement pion blanc-----------------------------------*/
            if (selecPiece.includes('PionBlanc')) {
                if (parseInt(selecPiecePos[0]) < parseInt(pos[0]) && parseInt(pos[0]) <= parseInt(selecPiecePos[0]) + 2 && parseInt(selecPiecePos[1]) === parseInt(pos[1])) { 
                    newPos = pos
                    await setSelecPieceDest(newPos)
                    pieceMove(newPos, selecPiece)
                }
            }
    /*------------------------------déplacement TOUR -----------------------------------*/

            if (selecPiece.includes('TourBlanc') || selecPiece.includes('TourNoir')) {
                if (parseInt(selecPiecePos[1]) === parseInt(pos[1]) || 
                parseInt(selecPiecePos[0]) === parseInt(pos[0])
                ) { 
                    newPos = pos
                    await setSelecPieceDest(newPos)
                    pieceMove(newPos, selecPiece)
                }
            }
    /*------------------------------déplacement ROI-----------------------------------*/

            if (selecPiece.includes('RoiBlanc') || selecPiece.includes('RoiNoir')) {
                console.log("pos", pos , 'selecPiecePos', selecPiecePos)
                if (
                    parseInt(pos[1]) === parseInt(selecPiecePos[1]) && parseInt(pos[0] - 1) === parseInt(selecPiecePos[0]) ||
                    parseInt(pos[1]) === parseInt(selecPiecePos[1]) && parseInt(pos[0]) === parseInt(selecPiecePos[0] - 1) ||
                    parseInt(pos[1] - 1) === parseInt(selecPiecePos[1]) && parseInt(pos[0]) === parseInt(selecPiecePos[0]) ||
                    parseInt(pos[1]) === parseInt(selecPiecePos[1] - 1) && parseInt(pos[0]) === parseInt(selecPiecePos[0]) ||
                    parseInt(pos) === parseInt(selecPiecePos) + 11 ||
                    parseInt(pos) === parseInt(selecPiecePos) - 11 ||
                    parseInt(pos) === parseInt(selecPiecePos) - 9 ||
                    parseInt(pos) === parseInt(selecPiecePos) + 9 
                ) { 
                    newPos = pos 
                    await setSelecPieceDest(newPos)
                    pieceMove(newPos, selecPiece)
                }
            }
    /*------------------------------déplacement DAME-----------------------------------*/

            if (selecPiece.includes('DameNoir') || selecPiece.includes('DameBlanc')) {
                if (
                    parseInt(pos[1]) === parseInt(selecPiecePos[1]) ||
                    parseInt(pos[0]) === parseInt(selecPiecePos[0]) ||
                    (parseInt(pos[0] - selecPiecePos[0]) * 9 ) + parseInt(selecPiecePos) === parseInt(pos) || 
                    (parseInt(pos[0] - selecPiecePos[0]) * 11 ) + parseInt(selecPiecePos) === parseInt(pos) 
                    

                ) { 
                    newPos = pos 
                    await setSelecPieceDest(newPos)
                    pieceMove(newPos, selecPiece)
                }
                
            }   
    /*------------------------------déplacement FOU-----------------------------------*/

    if (selecPiece.includes('FouBlanc') || selecPiece.includes('FouNoir')) {
        if (
        
            (parseInt(pos[0] - selecPiecePos[0]) * 9 ) + parseInt(selecPiecePos) === parseInt(pos) || 
            (parseInt(pos[0] - selecPiecePos[0]) * 11 ) + parseInt(selecPiecePos) === parseInt(pos) 
            

        ) { 
            newPos = pos 
            await setSelecPieceDest(newPos)
            pieceMove(newPos, selecPiece)
        }
        
    }  
    /*------------------------------déplacement CAVALIER-----------------------------------*/
    if (selecPiece.includes('CavaBlanc') || selecPiece.includes('CavaNoir')) {
        if (
        
            parseInt(pos) - 19 === parseInt(selecPiecePos) ||
            parseInt(pos) - 21 === parseInt(selecPiecePos) ||
            parseInt(pos) +19 === parseInt(selecPiecePos) ||
            parseInt(pos) +21 === parseInt(selecPiecePos) ||
            parseInt(pos) + 8 === parseInt(selecPiecePos) ||
            parseInt(pos) -8 === parseInt(selecPiecePos) ||
            parseInt(pos) + 12 === parseInt(selecPiecePos) ||
            parseInt(pos) - 12 === parseInt(selecPiecePos) 
            

        ) { 
            newPos = pos 
            await setSelecPieceDest(newPos)
            pieceMove(newPos, selecPiece)
        }
        
    }     
    
    
            //réinitialisation des variables pour le prochain déplacement 
            
            setSelecPiece('')
            newPos = ""
        }
    }
/*----------------------------déplacement de la pièce-------------------------------*/
    const pieceMove= (newPos) => {
        console.log(selecPiece)
        board.map(r => r.row.map(c => {

            console.log(newPos)
            if (c.piece !== undefined) {
                if(c.piece.includes(selecPiece)) {
                    c.piece = ''
                }
            }
            if (c.case.includes(newPos)) {
                c.piece = selecPiece
            }

        }
        ))
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

                        <button id={kase.piece} type='button' value={kase.case} className={`${kase.state} ${selecPiece === kase.piece && selecPiece !== '' ? 'seleced' : "" }`} onClick={(e) => handlePieceMove(e, kase.case, kase.piece)}>
                            {kase.piece}
                            
                        </button>
                    )}
                </div>)
        
            }   
        </div>
       
    </div>
  );
}

export default JeuDechec;



