import './PlantingManagement.css'
import 'bootstrap/dist/css/bootstrap.css';
import marthas_crew from './../../../images/marthas_crew.jpg'
import React from 'react'
import Navigation from '../../Navigation/Navigation.js';
import PMNavigation from './Components/PMNavigation/PMNavigation.js'
import Card from 'react-bootstrap/Card';


function PlantingManagement() {
    return (
        <>
            <div className="pm"> 
                <PMNavigation/>
                <h1 className='pm_title'>Planting Management</h1>
                <div className='container'>
                    
                    <img className='pm_img' src={marthas_crew} alt="Martha's planting crew Artisan 2018"/>
                </div>
            </div>
        </>
    );
}

export default PlantingManagement;