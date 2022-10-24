import React, { useEffect, useState } from 'react';
import PMNavigation from '../../../Components/PMNavigation/PMNavigation.js';
import { getEmployees } from '../../../MongoRoutes/EmployeeRoutes.js';
import { getCrews } from '../../../MongoRoutes/CrewRoutes.js';
import { getContracts } from '../../../MongoRoutes/ContractRoutes.js';
import { getBlocks } from '../../../MongoRoutes/BlockRoutes.js';
import { CreatePlanterReport } from '../../../MongoRoutes/PlanterReportRoutes.js';
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

    // Create new planter report in PlanterReports collection.
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(e)
        // createPlanterReport(crewName, crewboss, planters)
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
        loadCrews()
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
                                                    {
                                                        employees.map((employee) => 
                                                            <Form className='row'onSubmit={handleSubmit()}>
                                                                <Form.Group className='col col-2'>
                                                                    <Form.Label>{employee.first_name} {employee.last_name}</Form.Label>
                                                                </Form.Group>
                                                                <Form.Group className='col col-2'>
                                                                    <Form.Label>Contract</Form.Label>
                                                                    <Form.Select>
                                                                        {
                                                                            contracts.map((contract) => 
                                                                                <option value={contract._id}>{contract.contract_code}</option>
                                                                            )
                                                                        }
                                                                        {/* <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                        <option>Option 3</option> */}
                                                                    </Form.Select>
                                                                </Form.Group>
                                                                <Form.Group className='col col-2'>
                                                                    <Form.Label>Block</Form.Label>
                                                                    <Form.Select>
                                                                        {
                                                                            blocks.map((block) => 
                                                                                <option value={block._id}>{block.block_code}</option>
                                                                            )
                                                                        }
                                                                        {/* <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                        <option>Option 3</option> */}
                                                                    </Form.Select>
                                                                </Form.Group>
                                                                <Form.Group className='col col-2'>
                                                                    <Form.Label>Production</Form.Label>
                                                                    <Form.Control type="number"/>
                                                                </Form.Group>
                                                                <Form.Group className='col col-2'>
                                                                    <Form.Control type="hidden" value={employee._id}/>
                                                                </Form.Group>
                                                                <div className='col col-2'>
                                                                    <Button type="submit">Submit</Button>
                                                                </div>
                                                            </Form> 
                                                        )
                                                    }
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