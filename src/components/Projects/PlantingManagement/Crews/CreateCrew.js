import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function CreateCrew() {

    const [employees, setEmployees] = useState([]);
    const [roles, setRoles] = useState([]);
    const [crewbosses, setCrewbosses] = useState([]);
    const [planters, setPlanters] = useState([]);

    const handleSubmit = () => {
        return;
    }

    async function getEmployees() {
        const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employees`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        const employees = await response.json();
        setEmployees(employees)
    }

    async function getRoles() {
        const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/roles`)
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        const roles = await response.json();
        setRoles(roles);
    }

    useEffect(() => {
    
        getRoles();
        getEmployees();

        return;
    }, []);

    return(
        <>
            <h1>Create Crew</h1>
            {/* <h1>{JSON.stringify(employees)}</h1>
            <h1>{JSON.stringify(roles)}</h1> */}

            <Form onSubmit={e => {handleSubmit(e)}}>
                <Form.Group>
                    <Form.Label>Crewboss</Form.Label>
                    <Form.Select>
                        {
                            employees.map((employee) => {
                                if (employee.roles.includes("6320b9fe51a8b68cfaf26c53")) return (<option>{employee.first_name} {employee.last_name}</option>)
                            })
                        }
                    </Form.Select>
                </Form.Group>
                {
                    employees.map((employee) => {
                        if( employee.roles.includes("6320b9ee51a8b68cfaf26c52")) {
                            return (
                                <Form.Group>
                                   <Form.Check type="checkbox" label={employee.first_name + employee.last_name}defaultChecked={false}/>
                                </Form.Group>
                            )
                        }
                    })
                }
                <Form.Group>
                    <Form.Label>Planters</Form.Label>
                </Form.Group>
            </Form> 
        </>
    )
}

export default CreateCrew;