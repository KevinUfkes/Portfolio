import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './../Navigation/Navigation.js'
import Home from './../Home/Home.js'
import Projects from './../Projects/Projects.js'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes>
          <Route path="/projects" element={ <Projects/> }/>
          <Route path="/" element={ <Home/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
