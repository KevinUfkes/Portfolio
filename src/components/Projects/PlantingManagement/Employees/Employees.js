
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Employees() {

    const [planters, setPlanters] = useState([]);
    const [newFirstName, setNewFirstName] = useState([]);
    const [newLastName, setNewLastName] = useState([]);
    const [newEmail, setNewEmail] = useState([]);

    const handleSubmit = (e) => {
        createPlanter(newFirstName, newLastName, newEmail )
        setNewFirstName('')
        setNewLastName('')
        setNewEmail('')
        e.preventDefault();
    }

    async function getPlanters() {
      const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employees`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const planters = await response.json();
      setPlanters(planters);
    }

    async function createPlanter(first_name, last_name, email) {
      axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        roles: "6320b9ee51a8b68cfaf26c52"
      }).then(response => {
        console.log(response)
        window.location.reload()
      })
    }
    
    async function deletePlanter(planter_id) {
      axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee/delete`, {
        _id: planter_id
      }).then(response => {
        console.log(response)
        window.location.reload()
      })
    }

    useEffect(() => {
      
      getPlanters();

      return;
    }, [planters.length]);

    return (
        <>
          <Button href="/projects/planting_management">Planting Management</Button>   
            <div>Planters</div>
            <div className="App">
              <div className="row">
                <div className='col col-3'>
                  <h3>Add Planter</h3>
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
                    <Form.Group>
                      <Form.Check type="checkbox" label="Planter" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check type="checkbox" label="Crewboss" />
                    </Form.Group>
                    <Button variant='primary' type='submit'>Add Employee</Button>
                  </Form> 
                </div>
                <div className='col col-9'> 
                  <Table>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>View Details</th>
                        <th>Update</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        planters.map((planter) => 
                          <tr>
                            <td>{planter.first_name}</td>
                            <td>{planter.last_name}</td>
                            <td>{planter.email}</td>
                            <td><Button>Detials</Button></td>
                            <td><Link to="/projects/planting_management/update_planter" state={{planter_state: JSON.stringify(planter)}}>Update</Link></td>
                            <td><Button value={planter._id} onClick={e => deletePlanter(planter._id)}>Delete</Button></td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
        </>
    );
}

export default Employees;