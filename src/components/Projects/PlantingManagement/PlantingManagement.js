import './PlantingManagement.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectsNavigation from '../ProjectsNavigation.js'
import Planters from './Planters/Planters.js'
import React from 'react'


function PlantingManagement() {
    return (
        <>
            <div className="App"> 
                <ProjectsNavigation/>
                <h1>Planting</h1>   
                <Planters/>
            </div>
        </>
    );
}

export default PlantingManagement;