import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Crews() {

    const [crews, setCrews] = useState([]);

    async function getCrews() {
        const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/crews`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        const crews = await response.json();
        setCrews(crews);
      }

    useEffect(() => {
    
    getCrews();

    return;
    }, [crews.length]);

    return(
        <>
            <h1>Crews</h1>
            <Button href="/projects/planting_management">Planting Management</Button>   

            <Table>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
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
                            <td>{crew.crewboss}</td>
                            <td rowSpan={crew.planters.length}><tr><td>{crew.planters[0]}</td><br></br><td>{crew.planters[1]}</td></tr></td>
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