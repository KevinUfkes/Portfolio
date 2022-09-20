import React, { useEffect, useState } from 'react'
import { getEmployees } from '../MongoRoutes/EmployeeRoutes.js';
import { getRoles } from '../MongoRoutes/RoleRoutes.js';
import { getCrews, createCrew } from '../MongoRoutes/CrewRoutes.js';
import { getIndexByValue } from './../functions.js';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CreateCrew() {

    const [employees, setEmployees] = useState([]);
    const [crewName, setCrewName] = useState([]);
    const [planters, setPlanters] = useState([]);
    const [crewboss, setCrewboss] = useState([]);

    const planterRoleId = "6320b9ee51a8b68cfaf26c52";
    const crewbossRoleId = "6320b9fe51a8b68cfaf26c53";

    const handleSubmit = (e) => {
        createCrew(crewName, crewboss, planters)
        e.preventDefault();
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
            <h1>Create Crew</h1>
            <Form onSubmit={e => {handleSubmit(e)}}>
                <Form.Group>
                    <Form.Label>Crew Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter crew name' value={crewName} onChange={e => setCrewName(e.target.value)}/>
                </Form.Group>
                <h1>Crewboss: {}</h1>

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
                <Form.Group>
                    <Form.Label>Planters</Form.Label>
                </Form.Group>
                {
                    employees.map((employee) => {
                        if( employee.roles.includes(planterRoleId) && employee.crew.length===0) {
                            return (
                                <>
                                    <Form.Group>
                                        <Form.Check type="checkbox" label={employee.first_name + " " + employee.last_name} name={employee._id} onChange={handleChangeRolesCheckbox}/>
                                    </Form.Group>
                                </>
      
                            )
                        }
                    })
                }
                
                <Button variant='primary' type='submit'>Create Crew</Button>
            </Form> 
        </>
    )
}

export default CreateCrew;