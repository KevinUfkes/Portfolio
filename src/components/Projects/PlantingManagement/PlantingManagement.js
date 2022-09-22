import './PlantingManagement.css'
import 'bootstrap/dist/css/bootstrap.css';
import marthas_crew from './../../../images/marthas_crew.jpg'
import React from 'react'
import Navigation from '../../Navigation/Navigation.js';
import PMNavigation from './PMNavigation/PMNavigation.js'
import Card from 'react-bootstrap/Card';


function PlantingManagement() {
    return (
        <>
            <div className="pm"> 
                <PMNavigation/>
                {/* <Navigation 
                    bg = "dark"
                    expand = 'lg'
                    title = {["Planting Management", "/projects/planting_management"]}
                    links = {[
                        ["About", "/projects/planting_management/about"],
                        ["Employees", "/projects/planting_management/employees"],
                        ["Crews", "/projects/planting_management/crews"], 
                        ["Contracts", "/projects/planting_management/contracts"],
                      ]}
                /> */}
                <h1 className='pm_title'>Planting Management</h1>
                <div className='container'>
                    
                    <img className='pm_img' src={marthas_crew} alt="Martha's planting crew Artisan 2018"/>
                </div>
            </div>
        </>
    );
}

export default PlantingManagement;