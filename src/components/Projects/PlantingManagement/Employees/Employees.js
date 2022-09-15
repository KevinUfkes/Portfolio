
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Employees() {

    const [employees, setEmployees] = useState([]);
    const [roles, setRoles] = useState([]);
    const [newFirstName, setNewFirstName] = useState([]);
    const [newLastName, setNewLastName] = useState([]);
    const [newEmail, setNewEmail] = useState([]);
    const [newRoles, setNewRoles] = useState([]);

    const handleSubmit = (e) => {
        createEmployee(newFirstName, newLastName, newEmail, newRoles)
        setNewFirstName('')
        setNewLastName('')
        setNewEmail('')
        e.preventDefault();
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

    async function getEmployees() {
      const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employees`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const employees = await response.json();
      setEmployees(employees);
    }

    async function createEmployee(first_name, last_name, email, roles) {
      axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        roles: roles
      }).then(response => {
        console.log(response)
        window.location.reload()
      })
    }
    
    async function deleteEmployee(planter_id) {
      axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee/delete`, {
        _id: planter_id
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
      
      getEmployees();
      getRoles();

      return;
    }, [employees.length]);

    return (
        <>
          <Button href="/projects/planting_management">Planting Management</Button>   
            <div>Employees</div>
            <div className="App">
              <div className="row">
                <div className='col col-3'>
                  <h3>Add Employee</h3>
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
                      <Form.Group>
                        <Form.Check type="checkbox" label={role.name} name={role._id} onChange={handleChangeRolesCheckbox}/>
                      </Form.Group>
                    )}
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
                        employees.map((employee) => 
                          <tr>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td><Button>Detials</Button></td>
                            <td><Link to="/projects/planting_management/update_planter" state={{employee_state: JSON.stringify(employee)}}>Update</Link></td>
                            <td><Button value={employee._id} onClick={e => deleteEmployee(employee._id)}>Delete</Button></td>
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