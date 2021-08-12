// ce test corespond à l'epérience n°1 du fichier "testFonction"
import React, { useState, useEffect } from 'react';
import '../css/demineur.css';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu'


function Demineur() {
    
  const [tilesCoef, setTilesCoef] = useState(6)
  const [tileMap, setTileMap] = useState([])

  useEffect( () => {
    tableCreator()
  }, [])
/*------------------création du tableau ------------------*/
  const tableCreator = () => {
  
    let tableConstruct = []
    let curentCoord = 1
    
 /*------------------génération de mines sur position aléatoire ------------------*/
   
    let randomMines = []

    for (let i = 0; i < tilesCoef * 2; i++) {
      randomMines.push(Math.floor(Math.random() * (36)) + 1)
    }
    console.log(randomMines )




    for(let i = 0; i < tilesCoef; i++ ) {
      let row = []
      for(let j = 0; j < tilesCoef ; j++ ) {
        let newTile = ""
        let isMine = false
        if (randomMines.indexOf(curentCoord) !== -1) {
          newTile = {
            coordX : j + 1,
            coordY : i + 1,
            behavior: "mine", 
            clicked : false
          }
        } else {
          
          newTile = {
            coordX : j + 1,
            coordY : i + 1,
            behavior: "", 
            clicked : false
          
        }
        }
        
        curentCoord++
        row.push(newTile)
        
      }
      tableConstruct.push(row)
    }
    setTileMap(tableConstruct)
  /*------------------ ajout des mines -----------------------*/
  
  }
  
  const changeDificultie = (e) => {
    switch(e.target.value) {
      case "facile" :
        setTilesCoef(3)
        break;
      case "normal" :
        setTilesCoef(6)
        break;
      case "difficile" :
        setTilesCoef(10)

        break;
    }
  }

  const détection = (e, tile) => {
    // console.log(tile)
    if (tile.behavior === 'mine') {
      e.target.classList.add('mine')

    } else {
 /*--------------- si la case ne contient pas de mine --------*/
 let mineCount = 0
 
 /*---------------- vérification de chaque tuile --------*/
 
 for(let i = 0 ; i < tileMap.length; i++) {
   for ( let j = 0; j < tileMap[i].length; j++) {
     let tileToCheck = tileMap[i][j]
/*----------------vérification si une tuile adjacente à la tuile cliquée est une mine --------*/
     if (
              (tile.coordY + 1 === tileToCheck.coordY && tile.coordX === tileToCheck.coordX) ||
              (tile.coordY - 1 === tileToCheck.coordY && tile.coordX === tileToCheck.coordX) ||
              (tile.coordY === tileToCheck.coordY && tile.coordX + 1 === tileToCheck.coordX) ||
              (tile.coordY === tileToCheck.coordY && tile.coordX - 1 === tileToCheck.coordX) ||
              (tile.coordY - 1 === tileToCheck.coordY && tile.coordX - 1  === tileToCheck.coordX) ||
              (tile.coordY - 1 === tileToCheck.coordY && tile.coordX + 1  === tileToCheck.coordX) ||
              (tile.coordY + 1 === tileToCheck.coordY && tile.coordX - 1  === tileToCheck.coordX) ||
              (tile.coordY + 1 === tileToCheck.coordY && tile.coordX + 1  === tileToCheck.coordX) 

            ) {
              if (tileToCheck.behavior === 'mine') {
                console.log(tileToCheck)
/*----------------------- calcul du nombre de mine en contact avec la tuile cliquée--------------------*/                
                mineCount++
              }
            
          }
          
          
        }
      }
 /*--------------- impression du nombre de mines en contact avec la tuile cliquée --------*/

      e.target.innerHTML = mineCount
    }
  }

  return (
    <>
        <HeaderMenu />
        <div>
        <label for="dificultSelect">dificulté</label>
          <select name="dificult" id="dificultSelect" onChange={e => changeDificultie(e)}>
              <option value="facile">facile</option>
              <option value="normal">normal</option>
              <option value="difficile">difficile</option>
              
          </select>
        </div>
        <div className='mapContainer'>
{/*---------------- affichage de la map -----------------------*/}

          <div className='map'>
          {
            tileMap.map((row, i )=> 
              <div className='row' key={i}>
                {
                  row.map(tile => 
                    <div className='tile' onClick={(e) => détection(e, tile)} id={`${tile.coordX}, ${tile.coordY}`} key={`${tile.coordX}, ${tile.coordY}`}></div>
                  )
                }
              </div>
            )
          }
          </div>
        </div>
    </>
  );
}


export default Demineur;


