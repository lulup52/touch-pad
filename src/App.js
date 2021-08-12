import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage'
import Menu from './components/Menu'
import AllSounds from './components/AllSounds'

import MyPads from './components/MyPads'
import BlackSquare from './components/newFunctionality/testBlackSquare'
import Demineur from './components/newFunctionality/Demineur'
import Caroussel from './components/newFunctionality/testCarousel'
import JeuDechec from './components/newFunctionality/JeuDechec'

function App() {
  return (
    <div >
    <div>helloooooo</div>
    <a href="/menu">test</a>
      <Router>
        <Switch>
          <Route path ="/menu"><Menu /></Route>
          <Route path ="/allsounds"><AllSounds /></Route>
          <Route path ="/mypads"><MyPads /></Route>
          <Route path ="/blackSquare"><BlackSquare /></Route>
          <Route path ="/jeudechec"><JeuDechec /></Route>
          <Route path ="/demineur"><Demineur /></Route>
          <Route exact path="/"><MainPage /></Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
