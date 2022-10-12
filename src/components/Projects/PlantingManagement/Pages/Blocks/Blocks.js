import React, { useEffect, useState } from 'react';
import { getBlocks, createBlock, deleteBlock } from '../../MongoRoutes/BlockRoutes.js';
import { getContracts } from '../../MongoRoutes/ContractRoutes.js';
import PMNavigation from '../../Components/PMNavigation/PMNavigation.js';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Blocks() {

    const [blocks, setBlocks] = useState([]);
    const [contracts, setContracts] = useState([]);
    const [blockCode, setBlockCode] = useState();
    const [area, setArea] = useState();
    const [density, setDensity] = useState();
    const [price, setPrice] = useState();
    const [contract, setContract] = useState();

    const handleSubmit = (e) => {
        createBlock(blockCode, parseFloat(area), parseInt(density), parseFloat(price), contract)
        e.preventDefault();

        // setBlockCode('')
        // setArea('')
        // setDensity('')
        // setPrice('')
        // setContract('')
    }

    useEffect(() => {

        async function loadBlocks(){
            setBlocks(await getBlocks())
        }

        async function loadContracts(){
            setContracts(await getContracts())
        }

        loadBlocks();
        loadContracts();

        return;

    }, [blocks.length]);

    return(
        <>
            <div className='App pm'>
                <PMNavigation/>
                <div className='container'>
                    <Card className='pm_card pm_card_base'>
                        <Card.Title><h1>Blocks</h1></Card.Title>
                        <Card.Body>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col col-3'>
                                        <Card className='pm_card'>
                                            <Card.Title className="pm_card_title">Add Block</Card.Title>
                                            <Card.Body>
                                                <Form onSubmit={e => {handleSubmit(e)}} className="pm_form">
                                                    <Form.Group>
                                                        <Form.Label>Block Code</Form.Label>
                                                        <Form.Control type='text' placeholder='Enter block code' value={blockCode} onChange={e => setBlockCode(e.target.value)}/>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Area</Form.Label>
                                                        <Form.Control type='number' placeholder='Enter area' value={area} onChange={e => setArea(e.target.value)}/>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Density</Form.Label>
                                                        <Form.Control type='number' placeholder='Enter density' value={density} onChange={e => setDensity(e.target.value)}/>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Price</Form.Label>
                                                        <Form.Control type='number' placeholder='Enter price' value={price} onChange={e => setPrice(e.target.value)}/>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Contract Code</Form.Label>
                                                        <Form.Select onChange={e => setContract(e.target.value)}>
                                                            <option defaultValue disabled> Select a Contract Code</option>
                                                            {
                                                                contracts.map((contract) => {
                                                                    return (
                                                                        <option value={contract._id}>{contract.company_name} - {contract.contract_code}</option>
                                                                    )
                                                                })
                                                            }
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Button variant='success' type='submit'>Add Block</Button>
                                                </Form> 
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col col-9'>
                                        <Card className='pm_card'>
                                            <Card.Body>
                                                <Table striped bordered hover className='pm_table'>
                                                    <thead>
                                                        <tr>
                                                            <th>Block Code</th>
                                                            <th>Area</th>
                                                            <th>Density</th>
                                                            <th>Price</th>
                                                            <th>Contract Code</th>
                                                            <th>View Details</th>
                                                            <th>Update</th>
                                                            <th>Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            blocks.map((block) => {
                                                                return(
                                                                    <tr>
                                                                        <td>{block.block_code}</td>
                                                                        <td>{block.area}</td>
                                                                        <td>{block.density}</td>
                                                                        <td>{block.price}</td>
                                                                    
                                                                        {      
                                                                            block.contract=="" &&
                                                                            <td>Unassigned</td>
                                                                        }
                                                                        {
                                                                            block.contract != "" &&
                                                                            contracts.map((contract) => {
                                                                                if(block.contract == contract._id){
                                                                                    return(
                                                                                        <td>{contract.contract_code}</td>
                                                                                    )
                                                                                }
                                                                            })
                                                                        }       
                                                                        <td><Button>Details</Button></td>
                                                                        <td><Link to="/projects/planting_management/blocks/update_block" state={{block_state: JSON.stringify(block)}}><Button variant="warning">Update</Button></Link></td>
                                                                        <td><Button value={block._id} onClick={() => deleteBlock(block._id)} variant="danger">Delete</Button></td>
                                                                    </tr>
                                                                )
                                                            })
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

export default Blocks;