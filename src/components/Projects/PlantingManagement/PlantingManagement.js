import './PlantingManagement.css'
import 'bootstrap/dist/css/bootstrap.css';
import marthas_crew from './../../../images/marthas_crew.jpg'
import React from 'react'
import Navigation from '../../Navigation/Navigation.js';


function PlantingManagement() {
    return (
        <>
            <div className="App"> 
                <Navigation
                    bg = "dark"
                    expand = 'lg'
                    title = {["Planting Management", "/projects/planting_management"]}
                    links = {[
                        ["About", "/projects/planting_management/about"],
                        ["Employees", "/projects/planting_management/employees"],
                        ["Crews", "/projects/planting_management/crews"], 
                        ["Create Crews", "/projects/planting_management/crews/create"],
                      ]}
                />
                <h1>Planting Management</h1>  
                <img src={marthas_crew} alt="Martha's planting crew Artisan 2018"/>
                
            </div>
        </>
    );
}

export default PlantingManagement;