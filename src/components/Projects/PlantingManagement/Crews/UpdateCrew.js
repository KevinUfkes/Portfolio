import React, { useEffect, useState } from 'react'
import { updateCrew } from '../MongoRoutes/CrewRoutes.js';
import { getEmployees } from '../MongoRoutes/EmployeeRoutes.js';

import { useLocation, useNavigate } from 'react-router-dom';
import { getIndexByValue } from './../functions.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdateCrew(){

    const location = useLocation()
    const navigate = useNavigate()
    const { crew_state } = location.state;
    const crew = JSON.parse(crew_state)

    const [employees, setEmployees] = useState([]);
    const [crewName, setCrewName] = useState(crew.name);
    const [newPlanters, setNewPlanters] = useState([]);
    const [crewboss, setCrewboss] = useState(crew.crewboss);

    const planterRoleId = "6320b9ee51a8b68cfaf26c52";
    const crewbossRoleId = "6320b9fe51a8b68cfaf26c53";

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCrew(crew._id, crewName, crewboss, newPlanters)
        navigate('/projects/planting_management/crews')
    }

    const handleChangePlantersCheckbox = (e) => {
        console.log("Checked: " + e.target.checked)
        console.log("Name: " + e.target.name)
        if(e.target.checked){
            
            newPlanters.push(e.target.name)
        } else{
            let loc = getIndexByValue(newPlanters, e.target.name);
            if(loc != -1) newPlanters.splice(loc, 1);
        }
        console.log(newPlanters)
    }

    useEffect(() => {
        async function loadEmployees(){
            setEmployees(await getEmployees())
        }

        loadEmployees()
        setNewPlanters(crew.planters)

        return;
    }, []);

    return(
        <>
            <h1>Update Crew</h1>
            <Form onSubmit={e => {handleSubmit(e)}}>
                <Form.Group>
                    <Form.Label>Crew Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter crew name' value={crewName} onChange={e => setCrewName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Crewboss</Form.Label>
                    <Form.Select onChange={e => setCrewboss(e.target.value)} defaultValue={crew.crewboss}>
                        <option disabled selected value> Select a Crewboss</option>
                        {
                            employees.map((employee) => {
                                if (employee.roles.includes(crewbossRoleId) && (employee.crew.length===0 || employee.crew==crew._id)) {
                                    return (
                                        <option value={employee._id}>{employee.first_name} {employee.last_name}</option>
                                    )
                                } 
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Planters</Form.Label>
                </Form.Group>
                {
                    employees.map((employee) => {
                        if( employee.roles.includes(planterRoleId) && (employee.crew.length===0 || employee.crew[0]==crew._id)) {
                            {
                                if(employee.crew==crew._id ){
                                    return(
                                        <Form.Group>
                                            <Form.Check type="checkbox" label={employee.first_name + " " + employee.last_name} name={employee._id} onChange={handleChangePlantersCheckbox} defaultChecked={true}/>
                                        </Form.Group>
                                    )
                                } else{
                                    return(
                                        <Form.Group>
                                            <Form.Check type="checkbox" label={employee.first_name + " " + employee.last_name} name={employee._id} onChange={handleChangePlantersCheckbox} defaultChecked={false}/>
                                        </Form.Group>
                                    )
                                }
                            }
                        }
                    })
                }
                <Button variant='primary' type='submit'>Update Crew</Button>
            </Form> 
        </>
    )
}

export default UpdateCrew;