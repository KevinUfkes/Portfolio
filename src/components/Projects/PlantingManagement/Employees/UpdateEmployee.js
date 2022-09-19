import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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
        updateEmployee(newFirstName, newLastName, newEmail, newRoles)
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

    async function updateEmployee(first_name, last_name, email, roles) {
        axios.put(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee/update`, {
            _id: employee._id,
            data:{
                first_name: first_name,
                last_name: last_name,
                email: email,
                roles: roles
            }
        }).then(response => {
            console.log(response)
            window.location.reload()
        })
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

    function getIndexByValue(arr, value){
        for(let x=0; x<arr.length; x++){
        if(arr[x] == value) return x;
        }
        return -1;
    }

    useEffect(() => {
    
        getRoles();
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