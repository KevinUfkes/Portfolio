
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Planters() {

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

    // const handleDelete = (e) => {
    //   deletePlanter(planter_id)
    // }

    async function getPlanters() {
      const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/plantingmanagement/planters`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const planters = await response.json();
      setPlanters(planters);
    }

    async function createPlanter(first_name, last_name, email) {
      axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/planter`, {
        first_name: first_name,
        last_name: last_name,
        email: email
      }).then(response => {
        console.log(response)
        window.location.reload()
      })
    }
    
    async function deletePlanter(planter_id) {
      axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/planter/delete`, {
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
          <h1>{newFirstName}</h1><h1>{newLastName}</h1><h1>{newEmail}</h1>
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
                    <Button variant='primary' type='submit'>Add Planter</Button>
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
                            <td><Button>Update</Button></td>
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

export default Planters;