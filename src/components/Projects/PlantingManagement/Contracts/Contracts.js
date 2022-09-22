import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { getContracts, deleteContract } from '../MongoRoutes/ContractRoutes.js';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import PMNavigation from '../PMNavigation/PMNavigation.js';



function Contracts() {

    const [contracts, setContracts] = useState([]);
    // const [employees, setEmployees] = useState([]);

    useEffect(() => {
  
        async function loadContracts(){
            setContracts(await getContracts())
        }

        loadContracts()

        return;

    }, [contracts.length]);

    return(
        <>
          <div className='App pm'>
            <PMNavigation/>
            <div className='container'>
              <Card className='pm_card pm_card_base'>
                <Card.Title><h1>Crews</h1></Card.Title>
                <Card.Body>
                  <Button className="pm_btn_create" href="/projects/planting_management/crews/create" variant="success">Create Crew</Button>
                  <Table  striped bordered hover className='pm_table'>
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Contract Code</th>
                        <th>Blocks</th>
                        <th>View Details</th>
                        <th>Update</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        contracts.map((contract) => 
                          <tr>
                            <td>{contract.company_name}</td>
                            <td>{contract.contract_code}</td>
                            <td>{contract.blocks}</td>
                            <td><Button>Details</Button></td>
                            <td><Link to="/projects/planting_management/crews/update_contract" state={{contract_state: JSON.stringify(contract)}}><Button variant="warning">Update</Button></Link></td>
                            <td><Button value={contract._id} onClick={e => deleteContract(contract._id)} variant="danger">Delete</Button></td>
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

export default Contracts;