import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './../Navigation/Navigation.js';
import Home from './../Home/Home.js';
import About from './../About/About.js';
import Projects from './../Projects/Projects.js';
import LOTRAPI from './../Projects/LOTRAPI/LOTRAPI.js';

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
            ["About", "/about"],
            ["Projects", "/projects"], 
          ]}
        />
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={ <Projects/> }/>
            <Route path="/projects/lotr-api" element={<LOTRAPI/>}/>
            <Route path="/" element={ <Home/> }/>
          </Routes>
        </Router>
      </div>
    </>
    
  );
}


export default App;


