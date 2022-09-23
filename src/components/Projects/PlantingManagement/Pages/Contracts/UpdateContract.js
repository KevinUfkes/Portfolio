import React, { useEffect, useState } from 'react'
import { updateContract } from '../../MongoRoutes/ContractRoutes.js';
// import { getEmployees } from '../../MongoRoutes/EmployeeRoutes.js';

import { useLocation, useNavigate } from 'react-router-dom';
import { getIndexByValue } from '../../Functions/functions.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import PMNavigation from './../../Components/PMNavigation/PMNavigation.js';

function UpdateContract(){

    const location = useLocation()
    const navigate = useNavigate()
    const { contract_state } = location.state;
    const contract = JSON.parse(contract_state)

    const [companyName, setCompanyName] = useState(contract.company_name);
    const [contractCode, setContractCode] = useState(contract.contract_code);
    const [newBlocks, setNewBlocks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateContract(contract._id, companyName, contractCode, newBlocks)
        navigate('/projects/planting_management/contracts')
    }

    const handleChangePlantersCheckbox = (e) => {
        if(e.target.checked){
            
            newBlocks.push(e.target.name)
        } else{
            let loc = getIndexByValue(newBlocks, e.target.name);
            if(loc != -1) newBlocks.splice(loc, 1);
        }
        console.log(newBlocks)
    }

    useEffect(() => {

        console.log(contract)
        // async function loadEmployees(){
        //     setEmployees(await getEmployees())
        // }

        // loadEmployees()
        // setNewPlanters(crew.planters)

        return;
    }, []);

    return(
        <>
            <div className="App pm">
                <PMNavigation/>
                <div className='container'>
                    <Card className='pm_card pm_card_base'>
                        <Card.Title><h1>Update Crew</h1></Card.Title>
                        <Card.Body>
                            <Form onSubmit={e => {handleSubmit(e)}} className="pm_form">
                                <div className='row'>
                                    <div className='col'>
                                        <Form.Group>
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control type='text' placeholder='Enter company name' value={companyName} onChange={e => setCompanyName(e.target.value)}/>
                                        </Form.Group>
                                    </div>
                                    <div className='col'>
                                        <Form.Group>
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control type='text' placeholder='Enter contract code' value={contractCode} onChange={e => setContractCode(e.target.value)}/>
                                        </Form.Group>
                                    </div>
                                    <div className='col'>
                                        {/* <Form.Group>
                                            <Form.Label>Planters</Form.Label>
                                            {
                                                employees.map((employee) => {
                                                    if( employee.roles.includes(planterRoleId) && (employee.crew.length===0 || employee.crew[0]==crew._id)) {
                                                        {
                                                            if(employee.crew==crew._id ){
                                                                return(
                                                                    <>
                                                                        <Form.Check type="checkbox" label={employee.first_name + " " + employee.last_name} name={employee._id} onChange={handleChangePlantersCheckbox} defaultChecked={true}/>
                                                                    </>
                                                                )
                                                            } else{
                                                                return(
                                                                    <>
                                                                        <Form.Check type="checkbox" label={employee.first_name + " " + employee.last_name} name={employee._id} onChange={handleChangePlantersCheckbox} defaultChecked={false}/>
                                                                    </>
                                                                )
                                                            }
                                                        }
                                                    }
                                                })
                                            }
                                        </Form.Group> */}
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

export default UpdateContract;