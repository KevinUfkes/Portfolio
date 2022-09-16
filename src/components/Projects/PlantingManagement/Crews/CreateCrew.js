import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function CreateCrew() {

    const [employees, setEmployees] = useState([]);
    const [roles, setRoles] = useState([]);
    const [crewbosses, setCrewbosses] = useState([]);
    const [crewName, setCrewName] = useState([]);
    const [planters, setPlanters] = useState([]);
    const [crewboss, setCrewboss] = useState([]);

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
        console.log(planters)
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

    async function createCrew(name, crewboss, planters) {
        axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/crew/create`, {
        name: name,
        crewboss: crewboss,
        planters: planters,
      }).then(response => {
        console.log(response)
        window.location.reload()
      })
    }

    function getIndexByValue(arr, value){
        for(let x=0; x<arr.length; x++){
        if(arr[x] == value) return x;
        }
        return -1;
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
                    <Form.Label>Crew Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter crew name' value={crewName} onChange={e => setCrewName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Crewboss</Form.Label>
                    <Form.Select onChange={e => setCrewboss(e.target.value)}>
                        <option disabled selected value> Select a Crewboss</option>
                        {
                            employees.map((employee) => {
                                if (employee.roles.includes("6320b9fe51a8b68cfaf26c53")) {
                                    return (
                                        <option value={employee._id}>{employee.first_name} {employee.last_name}</option>
                                    )
                                } 
                            })
                        }
                    </Form.Select>
                </Form.Group>
                {
                    employees.map((employee) => {
                        if( employee.roles.includes("6320b9ee51a8b68cfaf26c52")) {
                            return (
                                <Form.Group>
                                   <Form.Check type="checkbox" label={employee.first_name + employee.last_name} name={employee._id} onChange={handleChangeRolesCheckbox}/>
                                </Form.Group>
                            )
                        }
                    })
                }
                <Form.Group>
                    <Form.Label>Planters</Form.Label>
                </Form.Group>
                <Button variant='primary' type='submit'>Create Crew</Button>
            </Form> 
        </>
    )
}

export default CreateCrew;