import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage'
import Menu from './components/Menu'
import AllSounds from './components/AllSounds'
import MyPads from './components/MyPads'

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path ="/menu"><Menu /></Route>
          <Route path ="/allsounds"><AllSounds /></Route>
          <Route path ="/mypads"><MyPads /></Route>
          <Route exact path="/"><MainPage /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
