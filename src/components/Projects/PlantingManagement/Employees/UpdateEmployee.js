import React, { useEffect, useState } from 'react'
import { updateEmployee } from '../MongoRoutes/EmployeeRoutes.js';
import { getRoles } from '../MongoRoutes/RoleRoutes.js';

import { useLocation, useNavigate } from 'react-router-dom';
import { getIndexByValue } from './../functions.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdateEmployee(){

    const location = useLocation()
    const navigate = useNavigate()
    const { employee_state } = location.state;
    const employee = JSON.parse(employee_state)

    const [newFirstName, setNewFirstName] = useState(employee.first_name);
    const [newLastName, setNewLastName] = useState(employee.last_name);
    const [newEmail, setNewEmail] = useState(employee.email);
    const [roles, setRoles] = useState([]);
    const [newRoles, setNewRoles] = useState([]);

    const handleSubmit = (e) => {
        console.log("EMPLOYEE: " + JSON.stringify(employee));

        console.log("CREW: " + JSON.stringify(employee.crew))
        updateEmployee(employee._id, newFirstName, newLastName, newEmail, newRoles, employee.crew);
        navigate('/projects/planting_management/employees')
    }

    const handleChangeRolesCheckbox = (e) => {
        console.log("Checked: " + e.target.checked)
        console.log("Name: " + e.target.name)
        if(e.target.checked){
          newRoles.push(e.target.name)
        } else{
          let loc = getIndexByValue(newRoles, e.target.name);
          if(loc != -1) newRoles.splice(loc, 1);
        }
        console.log(newRoles)
    }

    useEffect(() => {
        async function loadRoles(){
            setRoles(await getRoles())
        }
    
        loadRoles();
        setNewRoles(employee.roles)
        return;
    }, []);

    return(
        <>
            <h1>Update Employee</h1>
            <Button href="/projects/planting_management">Planting Management</Button>  
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{employee._id}</td>
                        <td>{employee.first_name}</td>
                        <td>{employee.last_name}</td>
                        <td>{employee.email}</td>
                    </tr>
                </tbody>
            </Table>
            <Form onSubmit={e => {handleSubmit(e)}}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter first name' value={newFirstName} onChange={e => setNewFirstName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter last name' value={newLastName} onChange={e => setNewLastName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
                </Form.Group>
                {roles.map((role) => 
                    {
                        if(employee.roles.includes(role._id)){
                            return(
                                <Form.Group>
                                    <Form.Check type="checkbox" label={role.name} name={role._id} onChange={handleChangeRolesCheckbox} defaultChecked={true}/>
                                </Form.Group>
                            )
                        } else {
                            return (
                                <Form.Group>
                                    <Form.Check type="checkbox" label={role.name} name={role._id} onChange={handleChangeRolesCheckbox} defaultChecked={false}/>
                                </Form.Group>
                            )
                        }
                    }  
                       
                    
                )}
                <Button variant='primary' type='submit'>Update Employee</Button>
            </Form> 
            
        </>
    )
}

export default UpdateEmployee;