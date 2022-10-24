import React, { useEffect, useState } from 'react';
import PMNavigation from '../../../Components/PMNavigation/PMNavigation.js';
import { getEmployees } from '../../../MongoRoutes/EmployeeRoutes.js';
import { getCrews } from '../../../MongoRoutes/CrewRoutes.js';
import { getContracts } from '../../../MongoRoutes/ContractRoutes.js';
import { getBlocks } from '../../../MongoRoutes/BlockRoutes.js';
import { createPlanterReport } from '../../../MongoRoutes/PlanterReportRoutes.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function CreateReportPlanter(){

    const [crews, setCrews] = useState([])
    const [employees, setEmployees] = useState([])
    const [contracts, setContracts] = useState([])
    const [blocks, setBlocks] = useState([])
    const [planter, setPlanter] = useState()
    const [contract, setContract] = useState()
    const [block, setBlock] = useState()
    const [production, setProduction] = useState([])



    // Create new planter report in PlanterReports collection.
    const handleSubmit = (e) => {
        console.log("Planter: ", planter)
        console.log("Contract: ", contract)
        console.log("Block: ", block)
        console.log("Production: ", production)
        createPlanterReport(planter, contract, block, parseInt(production))
        e.preventDefault();
        // navigate('/projects/planting_management/crews')
    }

    useEffect(() => {
      
        // Load all employees from Employees collection
        async function loadEmployees(){
            setEmployees(await getEmployees())
        }
  
        // Load all crews from Crews collection
        async function loadCrews(){
            setCrews(await getCrews())
        }

        // Load all contracts from Contracts collection
        async function loadContracts(){
            setContracts(await getContracts())
        }

        // Load all blocks from Blocks collection
        async function loadBlocks(){
            setBlocks(await getBlocks())
        }

        loadEmployees()
        // loadCrews()
        loadContracts()
        loadBlocks()
  
        return;
    }, []);

    return(
        <>
            <div className="App pm">
                <PMNavigation/>
                    <div className="container">
                    <Card className='pm_card pm_card_base'>
                        <Card.Title><h1>Create Planter Report</h1></Card.Title>
                        <Card.Body>
                            <div className="row">
                                <div className='col'> 
                                    <Card className="pm_card">
                                    <Card.Title className="pm_card_title">Active Employees</Card.Title>
                                        <Card.Body>
                                            <Card.Text>   
                                                <div className='container'>
                                                    <Form className='row'onSubmit={e => {handleSubmit(e)}}>
                                                        <div className='row'>
                                                            <Form.Group className='col col-2'>
                                                                <Form.Label>Planter</Form.Label>
                                                                <Form.Select onChange={e => setPlanter(e.target.value)}>
                                                                    {
                                                                        employees.map((employee) => 
                                                                            <option value={employee._id}>{employee.first_name} {employee.last_name}</option>
                                                                        )
                                                                    }
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group className='col col-2'>
                                                                <Form.Label>Contract</Form.Label>
                                                                <Form.Select onChange={e => setContract(e.target.value)}>
                                                                    {
                                                                        contracts.map((contract) => 
                                                                            <option value={contract._id}>{contract.contract_code}</option>
                                                                        )
                                                                    }
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group className='col col-2'>
                                                                <Form.Label>Block</Form.Label>
                                                                <Form.Select onChange={e => setBlock(e.target.value)}>
                                                                    {
                                                                        blocks.map((block) => 
                                                                            <option value={block._id}>{block.block_code}</option>
                                                                        )
                                                                    }
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group className='col col-2'>
                                                                <Form.Label>Production</Form.Label>
                                                                <Form.Control type="number" value={production} onChange={e => setProduction(e.target.value)}/>
                                                            </Form.Group>
                                                            <div className='col col-2'>
                                                                <Button type="submit">Submit</Button>
                                                            </div>
                                                        </div>
                                                    </Form> 
                                                </div>
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
    )
}

export default CreateReportPlanter;