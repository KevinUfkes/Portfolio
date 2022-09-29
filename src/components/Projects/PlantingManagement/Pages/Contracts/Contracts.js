import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { getContracts, deleteContract, createContract } from '../../MongoRoutes/ContractRoutes.js';
import { getBlocks } from '../../MongoRoutes/BlockRoutes.js';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import PMNavigation from './../../Components/PMNavigation/PMNavigation.js';



function Contracts() {

  const [contracts, setContracts] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [newCompanyName, setNewCompanyName] = useState([]);
  const [newContractCode, setNewContractCode] = useState([]);

  const handleSubmit = (e) => {
    createContract(newCompanyName, newContractCode)
    setNewCompanyName('')
    setNewContractCode('')
    e.preventDefault();
}

  useEffect(() => {

    async function loadContracts(){
        setContracts(await getContracts())
    }

    async function loadBlocks(){
      setBlocks(await getBlocks())
    }

    loadContracts()
    loadBlocks()

    return;

  }, [contracts.length]);

  return(
    <>
      <div className='App pm'>
        <PMNavigation/>
        <div className='container'>
          <Card className='pm_card pm_card_base'>
            <Card.Title><h1>Contracts</h1></Card.Title>
            <Card.Body>
              <div className='container'>
                <div className='row'>
                  <div className='col col-3'>
                    <Card className='pm_card'>
                      <Card.Title className="pm_card_title">Add Contract</Card.Title>
                        <Card.Body>
                          <Form onSubmit={e => {handleSubmit(e)}} className="pm_form">
                            <Form.Group>
                              <Form.Label>Company Name</Form.Label>
                              <Form.Control type='text' placeholder='Enter company name' value={newCompanyName} onChange={e => setNewCompanyName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Contract Code</Form.Label>
                              <Form.Control type='text' placeholder='Enter contract code' value={newContractCode} onChange={e => setNewContractCode(e.target.value)}/>
                            </Form.Group>
                          <Button variant='success' type='submit'>Add Contract</Button>
                        </Form> 
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col col-9'>
                    <Card className='pm_card'>
                      <Card.Body>
                        <Button className="pm_btn_create" href="/projects/planting_management/crews/create" variant="success">Create Contract</Button>
                        <Table striped bordered hover className='pm_table'>
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
                                  <td>
                                    <ul>
                                      {
                                        blocks.map((block) => {
                                          if(contract.blocks.includes(block._id)){
                                            return (
                                              <li>{block.block_code}</li>
                                            )
                                          }
                                        })
                                      }
                                    </ul>
                                    
                                  </td>
                                  <td><Button>Details</Button></td>
                                  <td><Link to="/projects/planting_management/contracts/update_contract" state={{contract_state: JSON.stringify(contract)}}><Button variant="warning">Update</Button></Link></td>
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
              </div> 
            </Card.Body>
          </Card>
        </div>
      </div>     
    </>
  )
}

export default Contracts;