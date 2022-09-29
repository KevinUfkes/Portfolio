import React, { useEffect, useState } from 'react'
import { updateBlock } from '../../MongoRoutes/BlockRoutes.js';
import { getContracts } from '../../MongoRoutes/ContractRoutes.js';

import { useLocation, useNavigate } from 'react-router-dom';
import { getIndexByValue } from '../../Functions/functions.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import PMNavigation from './../../Components/PMNavigation/PMNavigation.js';

function UpdateBlock(){

    const location = useLocation()
    const navigate = useNavigate()
    const { block_state } = location.state;
    const block = JSON.parse(block_state)

    const [blockCode, setBlockCode] = useState();
    const [area, setArea] = useState();
    const [density, setDensity] = useState();
    const [price, setPrice] = useState();
    const [contract, setContract] = useState(block.contract);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBlock(block._id, blockCode, area, density, price, contract)
        navigate('/projects/planting_management/blocks')
    }

    useEffect(() => {

        console.log(contract)
        async function loadContracts(){
            setContract(await getContracts())
        }

        loadContracts()

        return;
    }, []);

    return(
        <>
            <div className="App pm">
                <PMNavigation/>
                <div className='container'>
                    <Card className='pm_card pm_card_base'>
                        <Card.Title><h1>Update Block</h1></Card.Title>
                        <Card.Body>
                            <Form onSubmit={e => {handleSubmit(e)}} className="pm_form">
                                <div className='row'>
                                    <div className='col'>
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
                                    </div>
                                </div>
                                <Button variant='success' type='submit'>Update Contract</Button>
                            </Form> 
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default UpdateBlock;