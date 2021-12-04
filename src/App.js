import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { link } from 'react-router-dom';

function App() {
const [mode, setMode] =useState('light');
const[modeText, setmodeText]=useState("Enable Dark Mode")
const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "grey";
    let testArea= document.getElementById("myBox");
    testArea.style.backgroundColor = "grey";
    testArea.style.color="black";
    // testArea.style.cursor= "pointer";
    setmodeText("Enable Light Mode")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    let testArea= document.getElementById("myBox");
    testArea.style.backgroundColor = "white";
    testArea.style.color="black";
    // testArea.style.cursor= "pointer";
setmodeText("Enable Dark Mode")
  }
}
  

  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} textMode={modeText}/>
    <div className="container my-3">
  <Switch> 
    <Route path="/about">
      <About/>
      </Route>
      <Route path="/">
    <Textform heading="Enter the text to analyze"/>
    </Route>
    </Switch>
    </div>
    </Router>
  </>);
}

export default App;
