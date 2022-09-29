import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getEmployees } from './../../MongoRoutes/EmployeeRoutes.js';
import { createCrew } from './../../MongoRoutes/CrewRoutes.js'
import { getIndexByValue } from '../../Functions/functions.js';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PMNavigation from './../../Components/PMNavigation/PMNavigation.js';
import Card from 'react-bootstrap/Card';


function CreateCrew() {

    const [employees, setEmployees] = useState([]);
    const [crewName, setCrewName] = useState([]);
    const [planters, setPlanters] = useState([]);
    const [crewboss, setCrewboss] = useState([]);

    const navigate = useNavigate()
    const planterRoleId = "6320b9ee51a8b68cfaf26c52";
    const crewbossRoleId = "6320b9fe51a8b68cfaf26c53";

    const handleSubmit = (e) => {
        e.preventDefault();
        createCrew(crewName, crewboss, planters)
        navigate('/projects/planting_management/crews')
    }

    const handleChangeRolesCheckbox = (e) => {
       
        console.log("Checked: " + e.target.checked)
        console.log("Name: " + e.target.name)
        if(e.target.checked){
            
            planters.push(e.target.name)
        } else{
            let loc = getIndexByValue(planters, e.target.name);
            if(loc != -1) planters.splice(loc, 1);
        }
    }

    useEffect(() => {
        async function loadEmployees(){
            setEmployees(await getEmployees())
        }

        loadEmployees()

        return;
    }, []);

    return(
        <>
            <div className="App pm">
                <PMNavigation/>
                <div className='container'>
                    <Card className='pm_card pm_card_base'>
                        <Card.Title><h1>Create Crew</h1></Card.Title>
                        <Card.Body>
                            <Form onSubmit={e => {handleSubmit(e)}} className="pm_form">
                                <div className='row'>
                                    <div className='col'>
                                        <Form.Group>
                                            <Form.Label>Crew Name</Form.Label>
                                            <Form.Control type='text' placeholder='Enter crew name' value={crewName} onChange={e => setCrewName(e.target.value)}/>
                                        </Form.Group>
                                    </div>
                                    <div className='col'>
                                        <Form.Group>
                                            <Form.Label>Crewboss</Form.Label>
                                            <Form.Select onChange={e => setCrewboss(e.target.value)}>
                                                <option disabled selected value> Select a Crewboss</option>
                                                {
                                                    employees.map((employee) => {
                                                        if (employee.roles.includes(crewbossRoleId) && employee.crew.length===0) {
                                                            return (
                                                                <option value={employee._id}>{employee.first_name} {employee.last_name}</option>
                                                            )
                                                        } 
                                                    })
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col'>
                                        <Form.Group>
                                            <Form.Label>Planters</Form.Label>
                                            {
                                                employees.map((employee) => {
                                                    if( employee.roles.includes(planterRoleId) && employee.crew.length===0) {
                                                        return (
                                                            <>
                                                                <Form.Check type="checkbox" label={employee.first_name + " " + employee.last_name} name={employee._id} onChange={handleChangeRolesCheckbox}/>
                                                            </>
                                                        )
                                                    }
                                                })
                                            }
                                        </Form.Group>
                                    </div>
                                </div>
                                <Button variant='success' type='submit'>Create Crew</Button>
                            </Form> 
                        </Card.Body>
                    </Card>
                </div>

            </div>
            
            
        </>
    )
}

export default CreateCrew;