import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateEmployee(){

    const location = useLocation()
    const navigate = useNavigate()
    const { planter_state } = location.state;
    const planter = JSON.parse(planter_state)

    const [newFirstName, setNewFirstName] = useState(planter.first_name);
    const [newLastName, setNewLastName] = useState(planter.last_name);
    const [newEmail, setNewEmail] = useState(planter.email);

    const handleSubmit = (e) => {
        updateEmployee(newFirstName, newLastName, newEmail )
        navigate('/projects/planting_management/employees')
    }

    async function updateEmployee(first_name, last_name, email) {
        axios.put(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee/update`, {
            _id: planter._id,
            data:{
                first_name: first_name,
                last_name: last_name,
                email: email
            }
        }).then(response => {
            console.log(response)
            window.location.reload()
        })
      }

    return(
        <>
            <h1>Update Employee</h1>
            {/* <Button href="/projects/planting_management">Planting Management</Button>   */}
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
                        <td>{planter._id}</td>
                        <td>{planter.first_name}</td>
                        <td>{planter.last_name}</td>
                        <td>{planter.email}</td>
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
                <Button variant='primary' type='submit'>Update Employee</Button>
            </Form> 
        </>
    )
}

export default UpdateEmployee;