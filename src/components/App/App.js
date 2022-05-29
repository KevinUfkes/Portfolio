import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './../Navigation/Navigation.js'
import Home from './../Home/Home.js'
import Projects from './../Projects/Projects.js'
import LOTRAPI from './../Projects/LOTRAPI/LOTRAPI.js'
import MarqueeZone from '../MarqueeZone/MarqueeZone.js';

function App() {
  return (
    <>
      <div className="App">
        <Navigation 
          bg = "light"
          expand = 'lg'
          title = {["kevinufkes.ca", "/"]}
          links = {[
            ["Home", "/"],
            ["Projects", "/projects"], 
            ["Marquee Zone", "/marquee-zone"], 
          ]}
        />
        <Router>
          <Routes>
            <Route path="/projects" element={ <Projects/> }/>
            <Route path="/projects/lotr-api" element={<LOTRAPI/>}/>
            <Route path="/marquee-zone" element={ <MarqueeZone/> }/>
            <Route path="/" element={ <Home/> }/>
          </Routes>
        </Router>
      </div>
    </>
    
  );
}


export default App;


