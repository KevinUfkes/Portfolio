import './PlantingManagement.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Button from 'react-bootstrap/Button'


function PlantingManagement() {
    return (
        <>
            <div className="App"> 
                <h1>Planting Management</h1>  

                <Button href="/projects/planting_management/employees">Employees</Button>
                <Button href="/projects/planting_management/crews">Crews</Button>
                
            </div>
        </>
    );
}

export default PlantingManagement;