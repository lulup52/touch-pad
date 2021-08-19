// ce test corespond à l'epérience n°1 du fichier "testFonction"
import React, { useState, useEffect } from 'react';
import '../css/chest.css';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu'


function JeuDechec() {
    //gestion du tour par tour
    const [board, setBoard] = useState([''])
    const boardDimension = 8
    const [selecPiece, setSelecPiece] = useState('')
    const [selecPiecePos, setSelecPiecePos] = useState('')
    const [selecPieceDest, setSelecPieceDest] = useState('')
    const [joueurNoir, setJoueurNoir] = useState(false)
    const [win, setWin] = useState('')

/*-------------------Création du tableau ---------------------*/
    useEffect( () => {
        boardInit()
      }, [])

    const boardInit = () => {
    
    let table =[]
    let tableRow =[]
    let configNB = true
    for (let i=1; i<= boardDimension; i++ ) {
         let tableRow =[]
        for (let j=1; j<= boardDimension; j++ ) {
            if(configNB) {
                if (j % 2 !== 0) {
                    const item = {case : `${i}${j}`, color : "caseWithe" }
                    tableRow.push(item)
                } else {
                    const item = {case : `${i}${j}`, color : "caseBlack" }
                    tableRow.push(item)

                }
            } else {
                    if (j % 2 !== 0) {
                        const item = {case : `${i}${j}`, color : "caseBlack" }
                        tableRow.push(item)
                    } else {
                        const item = {case : `${i}${j}`, color : "caseWithe" }
                        tableRow.push(item)
    
                    }
            }
        }   
        configNB = !configNB

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
    }
    ))
    setBoard(table)
}
/*---------------------------fin creation tableau (plateau)----------------------------------------*/

/*-------------------verification si la pièce et sélectionée et jouable ------------*/

    const handlePieceMove = async (e, pos, piece) => {
        board.map(r => r.row.map(c => c.state = "caseWithe"))
        selectionPiece(e, pos, piece) 
        ChosePieceDest(e, pos, piece)
        posibleMoves(pos, piece)
      
    }

/*---------------------------gestion de la sélection des pièces----------------------------------------*/
    const selectionPiece = (e, pos, piece)  =>  {
        if (piece !== undefined && piece !== '') {
            if(!joueurNoir && e.target.id.includes('Blanc') || joueurNoir && e.target.id.includes('Noir') ) {
                setSelecPiece(e.target.id)
                setSelecPiecePos(pos)
                setSelecPieceDest("")
               

            }

        }
        
        
    }

/*---------------------------affichage des mouvements possibles ------------------------------------*/

    const posibleMoves = (pos, piece) => {
        let haut = []
        let bas = []
        let basPiece = false
        let gauche = []
        let droite = []
        let pieceHautPrenable = []
        let pieceBasPrenable = []
        let pieceGauchePrenable = []
        let pieceDroitePrenable = []
        let pieceHGPrenable = []
        let pieceHDPrenable = []
        let pieceBDPrenable = []
        let pieceBGPrenable = []
        let pieceDiagBG = false
        let pieceDiagBD = false
        let pieceDiagHG = false
        let pieceDiagHD = false
        let diagHG = []
        let diagHD = []
        let droitePiece = false
        let pionPiece = false
        let piecesPrenables = []

        let selectableCases = []
        board.map(r=> r.row.map((c, index)=> {
            if (piece !== undefined) {
                
                // deplacement pion blanc
                if (piece.includes('PionBlanc')) {

                    if (parseInt(c.case) === parseInt(pos) + 10 || parseInt(c.case) === parseInt(pos) + 20 ) {
                        if(c.piece) {
                            pionPiece = true
                        } else if (!pionPiece) {
                            selectableCases.push(c.case)

                        }
                    }
                    if (parseInt(c.case) === parseInt(pos) + 9 || parseInt(c.case) === parseInt(pos) + 11 ) {
                        if(c.piece) {
                            piecesPrenables.push(c.case)
                        } 
                    }
                }
                // deplacement pion noir
                if (piece.includes('PionNoir')) {

                    if (parseInt(c.case) === parseInt(pos) - 10 || parseInt(c.case) === parseInt(pos) - 20 ) {
                        if(c.piece) {
                            selectableCases = []
                        } else  {
                            selectableCases.push(c.case)

                        }
                    }
                    if (parseInt(c.case) === parseInt(pos) - 9 || parseInt(c.case) === parseInt(pos) - 11 ) {
                        if(c.piece) {
                            pionPiece = true
                            piecesPrenables.push(c.case)
                        } 
                    }
                }
                // deplacement tour
                if (piece.includes('Tour')) {

                    //a droite
                    if ( parseInt(c.case[0]) === parseInt(pos[0]) && parseInt(c.case[1]) > parseInt(pos[1]) ){
                        if(c.piece) {
                            droitePiece = true
                            if (pieceDroitePrenable.length ===0) {
                                pieceDroitePrenable.push(c.case)
                            }
                        } else if (!droitePiece) {
                            droite.push(c.case)

                        }

                    }
                    //a gauche
                    if ( parseInt(c.case[0]) === parseInt(pos[0]) && parseInt(c.case[1]) < parseInt(pos[1]) ){
                        if(c.piece) {
                            gauche = []
                            pieceGauchePrenable = []
                            pieceGauchePrenable.push(c.case)
                        } else {
                            gauche.push(c.case)

                        }

                    }
                    //en bas
                    if ( parseInt(c.case[1]) === parseInt(pos[1]) && parseInt(c.case[0]) > parseInt(pos[0]) ){
                        if(c.piece) {
                            basPiece = true
                            if(pieceBasPrenable.length === 0) {
                                pieceBasPrenable.push(c.case)
                            }
                        } else if (!basPiece) {
                            bas.push(c.case)

                        }

                    }
                    //en haut
                    if ( parseInt(c.case[1]) === parseInt(pos[1]) && parseInt(c.case[0]) < parseInt(pos[0])){
                        if(c.piece) {
                            haut = []
                            pieceHautPrenable = []
                            pieceHautPrenable.push(c.case)

                        } else {
                            haut.push(c.case)

                        }

                    }

                    
                   
                }
                // deplacement cavalier
                if (piece.includes('Cava')) {

                    if (
                        parseInt(pos) - 19 === parseInt(c.case) ||
                        parseInt(pos) - 21 === parseInt(c.case) ||
                        parseInt(pos) +19 === parseInt(c.case) ||
                        parseInt(pos) +21 === parseInt(c.case) ||
                        parseInt(pos) + 8 === parseInt(c.case) ||
                        parseInt(pos) -8 === parseInt(c.case) ||
                        parseInt(pos) + 12 === parseInt(c.case) ||
                        parseInt(pos) - 12 === parseInt(c.case) 
                    ) {
                        if (c.piece) {
                            piecesPrenables.push(c.case)
                        } else {
                            
                            selectableCases.push(c.case)
                        }

                    }


                }
                // deplacement fou
                if (piece.includes('Fou')) {
                    if (
                        (parseInt(pos[0] - c.case[0]) * 9 ) + parseInt(c.case) === parseInt(pos) && parseInt(pos) < parseInt(c.case)
                    ) {
                        if (c.piece) {
                            pieceDiagBG = true
                            if (pieceBGPrenable.length ===0) {
                                pieceBGPrenable.push(c.case)
                            }
                        } else if (!pieceDiagBG) {

                            selectableCases.push(c.case)
                        }

                    }
                    if (
                        (parseInt(pos[0] - c.case[0]) * 11 ) + parseInt(c.case) === parseInt(pos) && parseInt(pos) < parseInt(c.case)
                    ) {
                        if (c.piece) {
                            pieceDiagBD=true
                            if(pieceBDPrenable.length===0) {
                                pieceBDPrenable.push(c.case)
                            }
                            
                        } else if (!pieceDiagBD) {

                            selectableCases.push(c.case)
                        }

                    }
                    if (
                        (parseInt(pos[0] - c.case[0]) * 11 ) + parseInt(c.case) === parseInt(pos) && parseInt(pos) > parseInt(c.case)
                    ) {
                        if (c.piece) {
                            diagHG = []
                            pieceHGPrenable = []
                            pieceHGPrenable.push(c.case)
                        } else {
                            diagHG.push(c.case)
                        }

                    }
                    if (
                        (parseInt(pos[0] - c.case[0]) * 9 ) + parseInt(c.case) === parseInt(pos) && parseInt(pos) > parseInt(c.case)
                    ) {
                        if (c.piece) {
                            diagHD = []
                            pieceHDPrenable = []
                            pieceHDPrenable.push(c.case)
                        } else {

                            diagHD.push(c.case)
                        }

                    }
                   
                }
                // deplacement dame
                if (piece.includes('Dame')) {
                    if (
                        (parseInt(pos[0] - c.case[0]) * 9 ) + parseInt(c.case) === parseInt(pos) && parseInt(pos) < parseInt(c.case)
                    ) {
                        if (c.piece) {
                            pieceDiagBG = true
                            if (pieceBGPrenable.length ===0) {
                                pieceBGPrenable.push(c.case)
                            }
                        } else if (!pieceDiagBG) {

                            selectableCases.push(c.case)
                        }

                    }
                    if (
                        (parseInt(pos[0] - c.case[0]) * 11 ) + parseInt(c.case) === parseInt(pos) && parseInt(pos) < parseInt(c.case)
                    ) {
                        if (c.piece) {
                            pieceDiagBD=true
                            if(pieceBDPrenable.length===0) {
                                pieceBDPrenable.push(c.case)
                            }
                        } else if (!pieceDiagBD) {

                            selectableCases.push(c.case)
                        }

                    }
                    if (
                        (parseInt(pos[0] - c.case[0]) * 11 ) + parseInt(c.case) === parseInt(pos) && parseInt(pos) > parseInt(c.case)
                    ) {
                        if (c.piece) {
                            diagHG = []
                            pieceHGPrenable = []
                            pieceHGPrenable.push(c.case)
                        } else {
                            diagHG.push(c.case)
                        }

                    }
                    if (
                        (parseInt(pos[0] - c.case[0]) * 9 ) + parseInt(c.case) === parseInt(pos) && parseInt(pos) > parseInt(c.case)
                    ) {
                        if (c.piece) {
                            diagHD = []
                            pieceHDPrenable = []
                            pieceHDPrenable.push(c.case)
                        } else {

                            diagHD.push(c.case)
                        }

                    }
                     //a droite
                     if ( parseInt(c.case[0]) === parseInt(pos[0]) && parseInt(c.case[1]) > parseInt(pos[1]) ){
                        if(c.piece) {
                            droitePiece = true
                            if (pieceDroitePrenable.length ===0) {
                                pieceDroitePrenable.push(c.case)
                            }
                        } else if (!droitePiece) {
                            droite.push(c.case)

                        }

                    }
                    //a gauche
                    if ( parseInt(c.case[0]) === parseInt(pos[0]) && parseInt(c.case[1]) < parseInt(pos[1]) ){
                        if(c.piece) {
                            gauche = []
                            pieceGauchePrenable = []
                            pieceGauchePrenable.push(c.case)

                        } else {
                            gauche.push(c.case)

                        }

                    }
                    //en bas
                    if ( parseInt(c.case[1]) === parseInt(pos[1]) && parseInt(c.case[0]) > parseInt(pos[0]) ){

                        
                        if(c.piece) {
                            basPiece = true
                            if(pieceBasPrenable.length === 0) {
                                pieceBasPrenable.push(c.case)
                            }
                        } else if (!basPiece) {
                            bas.push(c.case)

                        }

                    }
                    //en haut
                    if ( parseInt(c.case[1]) === parseInt(pos[1]) && parseInt(c.case[0]) < parseInt(pos[0])){
                        if(c.piece) {
                            haut = []
                            pieceHautPrenable = []
                            pieceHautPrenable.push(c.case)
                        } else {
                            haut.push(c.case)

                        }

                    }
                   
                }
                // deplacement roi
                if (piece.includes('Roi')) {
                    if (
                        parseInt(pos) +9 === parseInt(c.case)
                    ) {
                        if (c.piece) {
                            pieceDiagBG = true
                            if (pieceBGPrenable.length ===0) {
                                pieceBGPrenable.push(c.case)
                            }
                        } else if (!pieceDiagBG) {

                            selectableCases.push(c.case)
                        }

                    }
                    if (
                        parseInt(pos) + 11 === parseInt(c.case)
                    ) {
                        if (c.piece) {
                            pieceDiagBD=true
                            if(pieceBDPrenable.length===0) {
                                pieceBDPrenable.push(c.case)
                            }
                        } else if (!pieceDiagBD) {

                            selectableCases.push(c.case)
                        }

                    }
                    if (
                        parseInt(pos) - 11  === parseInt(c.case) 
                    ) {
                        if (c.piece) {
                            diagHG = []
                            pieceHGPrenable = []
                            pieceHGPrenable.push(c.case)
                        } else {
                            diagHG.push(c.case)
                        }

                    }
                    if (
                        parseInt(pos) - 9 === parseInt(c.case) 
                    ) {
                        if (c.piece) {
                            diagHD = []
                            pieceHDPrenable = []
                            pieceHDPrenable.push(c.case)
                            
                        } else {

                            diagHD.push(c.case)
                        }

                    }
                     //a droite
                     if ( parseInt(c.case[0]) === parseInt(pos[0]) && parseInt(c.case[1]) === parseInt(pos[1]) +1 ){
                        if(c.piece) {
                            droitePiece = true
                            if (pieceDroitePrenable.length ===0) {
                                pieceDroitePrenable.push(c.case)
                            }
                        } else if (!droitePiece) {
                            droite.push(c.case)

                        }

                    }
                    //a gauche
                    if ( parseInt(c.case[0]) === parseInt(pos[0]) && parseInt(c.case[1]) === parseInt(pos[1]) -1 ){
                        if(c.piece) {
                            gauche = []
                            pieceGauchePrenable = []
                            pieceGauchePrenable.push(c.case)
                        } else {
                            gauche.push(c.case)

                        }

                    }
                    //en bas
                    if ( parseInt(c.case[1]) === parseInt(pos[1]) && parseInt(c.case[0]) === parseInt(pos[0]) + 1 ){

                        
                        if(c.piece) {
                            basPiece = true
                            if(pieceBasPrenable.length === 0) {
                                pieceBasPrenable.push(c.case)
                            }
                        } else if (!basPiece) {
                            bas.push(c.case)

                        }

                    }
                    //en haut
                    if ( parseInt(c.case[1]) === parseInt(pos[1]) && parseInt(c.case[0]) === parseInt(pos[0]) - 1){
                        if(c.piece) {
                            haut = []
                            pieceHautPrenable = []
                            pieceHautPrenable.push(c.case)
                        } else {
                            haut.push(c.case)

                        }

                    }
                   
                }

            }
        }))
        
        piecesPrenables.push(...pieceBasPrenable, ...pieceDroitePrenable, ...pieceGauchePrenable, ...pieceHautPrenable, ...pieceBGPrenable, ...pieceBDPrenable, ...pieceHDPrenable, ...pieceHGPrenable)
        selectableCases.push(...haut, ...bas, ...droite, ...gauche, ...diagHG, ...diagHD)
        //afiche les case où la piece peut etre déplacée ou les pieces adverses pouvant etre prises
        board.map(r => r.row.map(c => {
            selectableCases.forEach(exemple => {
                if(parseInt(c.case) === parseInt(exemple)) {
                    c.state = 'selectable'

                }
            })
            if ( piece !== undefined && piece.includes('Blanc')) {

                piecesPrenables.forEach(test => {
                    if(parseInt(c.case) === parseInt(test) && c.piece.includes('Noir')) {
                        c.state = 'piecePrenable'
    
                    }
                })
            } else if ( piece !== undefined && piece.includes('Noir')){
                piecesPrenables.forEach(test => {
                    if(parseInt(c.case) === parseInt(test) && c.piece.includes('Blanc')) {
                        c.state = 'piecePrenable'
    
                    }
                })
            }
        }))
    }
/*---------------------------gestion de la destination de la pièce sélectionée----------------------------------------*/

    const ChosePieceDest = async(e, pos, piece) => {
        console.log(pos)
        let newPos = ""
        let choosepiece = false
        if (e.target.classList.value.includes("selectable") || e.target.classList.value.includes("piecePrenable")) {
                /*------------------------------déplacement pion noir-----------------------------------*/
                        if (selecPiece.includes('PionNoir')) {
            
                            if (e.target.classList.value.includes("piecePrenable") && parseInt(selecPiecePos) - 9 === parseInt(pos) || parseInt(selecPiecePos) - 11 === parseInt(pos)){
                                newPos = pos
                                await setSelecPieceDest(newPos)
                                pieceMove(newPos, selecPiece)
                            } else if (parseInt(selecPiecePos[0]) > parseInt(pos[0]) && parseInt(pos[0]) >= parseInt(selecPiecePos[0]) - 2 && parseInt(selecPiecePos[1]) === parseInt(pos[1])) {
                                newPos = pos
                                await setSelecPieceDest(newPos)
                                pieceMove(newPos, selecPiece)
                            }
                        }
                /*------------------------------déplacement pion blanc-----------------------------------*/
                        if (selecPiece.includes('PionBlanc')) {
                            if (e.target.classList.value.includes("piecePrenable") && parseInt(selecPiecePos)+ 9 === parseInt(pos) || parseInt(selecPiecePos)+ 11 === parseInt(pos)){
                                newPos = pos
                                await setSelecPieceDest(newPos)
                                pieceMove(newPos, selecPiece)
                            } else if (e.target.classList.value.includes("selectable")  && parseInt(selecPiecePos[0]) < parseInt(pos[0]) && parseInt(pos[0]) <= parseInt(selecPiecePos[0]) + 2 && parseInt(selecPiecePos[1]) === parseInt(pos[1])) { 
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
        board.map(r => r.row.map(c => {
            c.state ='caseWithe'
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
        setJoueurNoir(!joueurNoir)

        /*-------------- gestion de la condition de victoire -------------------*/
        if (document.querySelector("#RoiBlanc") === null || document.querySelector("#RoiNoir") === null) {
            if (document.querySelector("#RoiNoir") === null) {
                setWin('blanc')
            } else if (document.querySelector("#RoiBlanc") === null ) {
                setWin('noir')

            }
        }
    }



  return (      

    <div className="mainPage">
        <HeaderMenu />
        <p>{`Tour du joueur ${!joueurNoir ? "joueur blanc" : "joueur noir"}`}</p>
        <div className='tableau'>
            {
            board === undefined ? '' 
            :
                board.map((row, key) => row.row === undefined ? "" 
                :  
                <div className='row'>
                    {row.row.map((kase) => 
                    /*liste de boutons*/ 

                        <button id={kase.piece} type='button' value={kase.case} className={`${kase.state} ${kase.color} ${selecPiece === kase.piece && selecPiece !== '' ? 'seleced' : "" }`} onClick={(e) => handlePieceMove(e, kase.case, kase.piece)}>
                            {kase.piece}
                            
                        </button>
                    )}
                </div>)
        
            }   
        </div>
       {
           win !== "" ? 
            <div className="modalChestWin" onClick={()=> window.location.reload()}>
                <p className="winText">{`joueur ${win} gagne`}</p>
                <p className="winText">Cliquez ici pour relancer une partie</p>
            </div> 
            : 
            ""
       }
    </div>
  );
}


export default JeuDechec;


