import './PlantingManagement.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectsNavigation from '../ProjectsNavigation.js'
import Planters from './Planters/Planters.js'
import React from 'react'


function Planting() {
    return (
        <>
            <div className="App"> 
                <ProjectsNavigation/>
                <h1>Planting Management</h1>   
                <Planters/>
                
            </div>
        </>
    );
}

export default Planting;