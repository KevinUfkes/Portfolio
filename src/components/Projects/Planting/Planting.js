import './Planting.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectsNavigation from './../ProjectsNavigation.js'
import Planter from './Planter.js'
import React from 'react'


function Planting() {
    return (
        <>
            <div className="App"> 
                <ProjectsNavigation/>
                <h1>Planting</h1>   
                <Planter/>
                
            </div>
        </>
    );
}

export default Planting;