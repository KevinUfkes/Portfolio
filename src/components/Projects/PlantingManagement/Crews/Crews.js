import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Employees from '../Employees/Employees';


function Crews() {

    const [crews, setCrews] = useState([]);
    const [employees, setEmployees] = useState([])
    

    async function getCrews() {
        const crewsResponse = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/crews`);
    
        if (!crewsResponse.ok) {
          const message = `An error occurred: ${crewsResponse.statusText}`;
          window.alert(message);
          return;
        }
        const crews = await crewsResponse.json();
        setCrews(crews);

        const employeesResponse = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employees`);
  
        if (!employeesResponse.ok) {
          const message = `An error occurred: ${employeesResponse.statusText}`;
          window.alert(message);
          return;
        }
        const employees = await employeesResponse.json();
        setEmployees(employees);
      }

    useEffect(() => {
    
      getCrews();
      

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
                        {/* <th>View Details</th>
                        <th>Update</th>
                        <th>Delete</th> */}
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
                            {/* <td><Button>Detials</Button></td>
                            <td><Link to="/projects/planting_management/update_planter" state={{planter_state: JSON.stringify(planter)}}>Update</Link></td>
                            <td><Button value={planter._id} onClick={e => deletePlanter(planter._id)}>Delete</Button></td> */}
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
        </>
    )
}

export default Crews;