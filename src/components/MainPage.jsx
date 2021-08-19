import React from 'react';
import './css/mainPage.css';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="mainPage">
        <div >
            <button type='button' className='mainTitle' >Bienvenue dans mon bac à sable</button>
        </div>
        <div className='paraIntro'>
          <p>
            Vous vous trouvez ici dans un espace que j'ai créé afin d'expérimenter. Tout ce qui est ici n'est pas forcément fonctionnel, mais me permet de metre les mains dans le camboui en faisant des tests.
          </p> 
          <p>
            Ce projet devait, à la base, être un touch-pad, sorte de clavier virtuel permettant de jouer des sons mais qui à ... disons ... muté! Chaque "projet" présent ici est prétexte à exercice et sera susceptible d'être développé plus en profondeur dans le futur.
          </p>
          <p>
            Vous y trouverez des choses fonctionnelles, d'autres pas du tout. Mais même si tout ne marche pas, venez jeter un coup d'oeil, cliquez, regardez, testez et décortiquez si vous le souhaitez. Pour les plus téméraires, vous trouverez le lien du repo GitHub ici : 
            <a href="https://github.com/lulup52/touch-pad" target="_blank"> !!! par ici le repo !!!</a>
          </p>
          <p>
            Il ne me reste plus qu'à vous souhaiter bonne visite 
          </p>
           

        </div>
        <div className='vh40'>
            <Link className='mainNextButton'to='/menu' >Next</Link>
        </div>
        
    </div>
  );
}

export default MainPage;
