
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react'
import { getEmployees, createEmployee, deleteEmployee } from '../../MongoRoutes/EmployeeRoutes.js'
import { getRoles } from '../../MongoRoutes/RoleRoutes.js';
import { getIndexByValue } from '../../Functions/functions.js';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import PMNavigation from '../../Components/PMNavigation/PMNavigation.js';

function Employees() {

    const [employees, setEmployees] = useState([]);
    const [roles, setRoles] = useState([]);
    const [newFirstName, setNewFirstName] = useState([]);
    const [newLastName, setNewLastName] = useState([]);
    const [newEmail, setNewEmail] = useState([]);
    const [newRoles, setNewRoles] = useState([]);

    // Create new employee in Employees collection.
    const handleSubmit = (e) => {
        createEmployee(newFirstName, newLastName, newEmail, newRoles)
        setNewFirstName('')
        setNewLastName('')
        setNewEmail('')
        e.preventDefault();
    }

    // Update roles array with currently checked roles.
    const handleChangeRolesCheckbox = (e) => {
      if(e.target.checked){
        newRoles.push(e.target.name)
      } else{
        let loc = getIndexByValue(newRoles, e.target.name);
        if(loc != -1) newRoles.splice(loc, 1);
      }
    }

    useEffect(() => {

      // Load all employees from Employees collection
      async function loadEmployees(){
        setEmployees(await getEmployees())
      }

      // Load all roles from Roles collection
      async function loadRoles(){
        setRoles(await getRoles())
      }

      loadEmployees()
      loadRoles()
      return;
    }, [employees.length]);

    return (
      <>
        <div className="App pm">
          <PMNavigation/>
            <div className="container">
              <Card className='pm_card pm_card_base'>
                <Card.Title><h1>Employees</h1></Card.Title>
                  <Card.Body>
                  <div className="row">
                    <div className='col col-3'>
                      <Card className='pm_card'>
                        <Card.Title className="pm_card_title">Add Employee</Card.Title>
                        <Card.Body>
                          <Form onSubmit={e => {handleSubmit(e)}} className="pm_form">
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
                          <Button variant='success' type='submit'>Add Employee</Button>
                        </Form> 
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col col-9'> 
                    <Card className="pm_card">
                      <Card.Title className="pm_card_title">Active Employees</Card.Title>
                      <Card.Body>
                        <Card.Text>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Roles</th>
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
                                    <td>
                                      {roles.map((role) => {
                                        if(employee.roles.includes(role._id)){
                                          return (
                                            <p>{role.name}</p>
                                          )
                                        }
                                      })}
                                    </td>
                                    <td><Button>Details</Button></td>
                                    <td><Link to="/projects/planting_management/update_planter" state={{employee_state: JSON.stringify(employee)}}><Button variant="warning">Update</Button></Link></td>
                                    <td><Button value={employee._id} onClick={e => deleteEmployee(employee._id)} variant="danger">Delete</Button></td>
                                  </tr>
                                )
                              }
                            </tbody>
                          </Table>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
}

export default Employees;