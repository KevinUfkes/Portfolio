import React, { useEffect, useState } from 'react';
import { getCrews, deleteCrew } from '../MongoRoutes/CrewRoutes.js';
import { getEmployees } from '../MongoRoutes/EmployeeRoutes.js'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


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
            <h1>Crews</h1>
            <Button href="/projects/planting_management">Planting Management</Button>   
            <Button href="/projects/planting_management/crews/create">Create Crew</Button>
            <Table>
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
                                if(crew.crewboss==employee._id) return (<>{employee.first_name} {employee.last_name}</>)
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
                            <td><Button>Detials</Button></td>
                            <td><Link to="/projects/planting_management/crews/update_crew" state={{crew_state: JSON.stringify(crew)}}>Update</Link></td>
                            <td><Button value={crew._id} onClick={e => deleteCrew(crew._id)}>Delete</Button></td>
                          </tr>
                        )
                      }

                    </tbody>
                  </Table>
        </>
    )
}

export default Crews;