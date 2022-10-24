import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './../Navigation/Navigation.js';
import Home from './../Home/Home.js';
import About from './../About/About.js';
import Profile from './../Profile/Profile.js';
import Projects from './../Projects/Projects.js';
import LOTRAPI from './../Projects/LOTRAPI/LOTRAPI.js';

// Project - Credit Card Authentication
import CreditCard from './../Projects/CreditCard/CreditCard.js';
import CCAbout from '../Projects/CreditCard/CCAbout';

// Project - Planting Management
import PlantingManagement from '../Projects/PlantingManagement/PlantingManagement.js';
import PMNavigation from '../Projects/PlantingManagement/Components/PMNavigation/PMNavigation.js';
import PMAbout from '../Projects/PlantingManagement/Pages/About/PMAbout.js'
import Employees from '../Projects/PlantingManagement/Pages/Employees/Employees';
import UpdateEmployee from '../Projects/PlantingManagement/Pages/Employees/UpdateEmployee.js';
import Crews from '../Projects/PlantingManagement/Pages/Crews/Crews.js';
import CreateCrew from '../Projects/PlantingManagement/Pages/Crews/CreateCrew.js';
import UpdateCrew from '../Projects/PlantingManagement/Pages/Crews/UpdateCrew.js';
import Contracts from './../Projects/PlantingManagement/Pages/Contracts/Contracts.js'
import UpdateContract from './../Projects/PlantingManagement/Pages/Contracts/UpdateContract.js';
import Blocks from './../Projects/PlantingManagement/Pages/Blocks/Blocks.js';
import UpdateBlock from '../Projects/PlantingManagement/Pages/Blocks/UpdateBlock.js';
import PlanterReports from './../Projects/PlantingManagement/Pages/Reports/PlanterReports.js';
import CrewReports from './../Projects/PlantingManagement/Pages/Reports/CrewReports';

// Project Cypress
import CypressMain from './../Projects/Cypress/CypressMain.js';
import PMVideos from './../Projects/Cypress/PMVideos.js';


function App() {
  return (
    <>
      <div className="App">
        <Navigation class="app_nav"
          bg = "light"
          expand = 'lg'
          title = {["kevinufkes.ca", "/"]}
          links = {[
            // ["Home", "/"],
            ["Profile", "/profile"],
            ["About", "/about"],
            ["Projects", "/projects"], 
          ]}
          dropdownTitle = ""
          dropdown = {[]}
        />
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/projects" element={ <Projects/> }/>

            {/* Lord of the Rings API Consumption */}
            <Route path="/projects/lotr-api" element={<LOTRAPI/>}/>

            {/* Credit Card  */}
            <Route path="/projects/credit-card" element={<CreditCard/>}/>
            <Route path="/projects/credit-card/about" element={<CCAbout/>}/>

            {/* Planting Mangement */}
            <Route path="/projects/planting_management" element={<PlantingManagement/>}/>
            <Route path="/projects/planting_management/about" element={<PMAbout/>}/>
            <Route path="/projects/planting_management/employees" element={<Employees/>}/>
            <Route path="/projects/planting_management/update_planter" element={<UpdateEmployee />}/>
            <Route path="/projects/planting_management/crews" element={<Crews/>}/>
            <Route path="/projects/planting_management/crews/create" element={<CreateCrew/>}/>
            <Route path="/projects/planting_management/crews/update_crew" element={<UpdateCrew/>}/>
            <Route path="/projects/planting_management/contracts" element={<Contracts/>}/>
            <Route path="/projects/planting_management/contracts/update_contract" element={<UpdateContract/>}/>
            <Route path="/projects/planting_management/blocks" element={<Blocks/>}/>
            <Route path="/projects/planting_management/blocks/update_block" element={<UpdateBlock/>}/>
            <Route path="/projects/planting_management/reports/planter_reports" element={<PlanterReports/>}/>
            <Route path="/projects/planting_management/reports/crew_reports" element={<CrewReports/>}/>


            {/* Cypress */}
            <Route path="/projects/cypress" element={<CypressMain/>}/>
            <Route path="/projects/cypress/pm_videos" element={<PMVideos/>}/>

            <Route path="/" element={ <Profile/> }/>
          </Routes>
        </Router>
      </div>
    </>
  );
}


export default App;


