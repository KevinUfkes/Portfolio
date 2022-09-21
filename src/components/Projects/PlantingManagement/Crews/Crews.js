import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { getCrews, deleteCrew } from '../MongoRoutes/CrewRoutes.js';
import { getEmployees } from '../MongoRoutes/EmployeeRoutes.js'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navigation from './../../../Navigation/Navigation.js';



function Crews() {

    const [crews, setCrews] = useState([]);
    const [employees, setEmployees] = useState([])

    useEffect(() => {
  
      async function loadEmployees(){
        setEmployees(await getEmployees())
      }

      async function loadCrews(){
        setCrews(await getCrews())
      }

      loadEmployees()
      loadCrews()

      return;
    }, [crews.length]);

    return(
        <>
          <div className='App pm'>
            <Navigation 
              bg = "dark"
              expand = 'lg'
              title = {["Planting Management", "/projects/planting_management"]}
              links = {[
                  ["About", "/projects/planting_management/about"],
                  ["Employees", "/projects/planting_management/employees"],
                  ["Crews", "/projects/planting_management/crews"], 
                  // ["Create Crews", "/projects/planting_management/crews/create"],
                ]}
            />
            <div className='container'>
              <Card className='pm_card pm_card_base'>
                <Card.Title><h1>Crews</h1></Card.Title>
                <Card.Body>
                  <Button className="pm_btn_create" href="/projects/planting_management/crews/create" variant="success">Create Crew</Button>
                  <Table  striped bordered hover className='pm_table'>
                    <thead>
                      <tr>
                        <th>Crew Name</th>
                        <th>Crewboss</th>
                        <th>Planters</th>
                        <th>View Details</th>
                        <th>Update</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        crews.map((crew) => 
                          <tr>
                            <td>{crew.name}</td>
                            <td>
                              {employees.map((employee) => {
                                if(crew.crewboss==employee._id) return (<div>{employee.first_name} {employee.last_name}</div>)
                              })}
                            </td>
                            <td>
                              <ul>
                                {crew.planters.map((planter) => 
                                  employees.map((employee) => {
                                    if(employee._id == planter) return(<li>{employee.first_name} {employee.last_name}</li>)                                                
                                  })
                                )}
                              </ul>
                            </td>
                            <td><Button>Details</Button></td>
                            <td><Link to="/projects/planting_management/crews/update_crew" state={{crew_state: JSON.stringify(crew)}}><Button variant="warning">Update</Button></Link></td>
                            <td><Button value={crew._id} onClick={e => deleteCrew(crew._id)} variant="danger">Delete</Button></td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              
              
            </div>
            
          </div>
            
        </>
    )
}

export default Crews;