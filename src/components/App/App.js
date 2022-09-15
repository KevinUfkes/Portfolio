import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './../Navigation/Navigation.js';
import Home from './../Home/Home.js';
import About from './../About/About.js';
import Projects from './../Projects/Projects.js';
import LOTRAPI from './../Projects/LOTRAPI/LOTRAPI.js';
import CreditCard from './../Projects/CreditCard/CreditCard.js';
import PlantingManagement from '../Projects/PlantingManagement/PlantingManagement.js';
import Employees from '../Projects/PlantingManagement/Employees/Employees';
import UpdateEmployee from '../Projects/PlantingManagement/Employees/UpdateEmployee.js';
import Crews from '../Projects/PlantingManagement/Crews/Crews.js';
import CreateCrew from '../Projects/PlantingManagement/Crews/CreateCrew.js';


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

            // Lord of the Rings API Consumption
            <Route path="/projects/lotr-api" element={<LOTRAPI/>}/>

            // Credit Card 
            <Route path="/projects/credit-card" element={<CreditCard/>}/>

            // Planting Mangement
            <Route path="/projects/planting_management" element={<PlantingManagement/>}/>
            <Route path="/projects/planting_management/employees" element={<Employees/>}/>
            <Route path="/projects/planting_management/update_planter" element={<UpdateEmployee />}/>
            <Route path="/projects/planting_management/crews" element={<Crews/>}/>
            <Route path="/projects/planting_management/crews/create" element={<CreateCrew/>}/>
            <Route path="/" element={ <Home/> }/>
          </Routes>
        </Router>
      </div>
    </>
    
  );
}


export default App;


