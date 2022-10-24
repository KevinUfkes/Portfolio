import React, { useEffect, useState } from 'react';
import PMNavigation from './../../../Components/PMNavigation/PMNavigation.js';
import { getEmployees } from './../../../MongoRoutes/EmployeeRoutes.js';
import { getCrews } from './../../../MongoRoutes/CrewRoutes.js';
import { getBlocks } from '../../../MongoRoutes/BlockRoutes.js';

function CreateCrewReport(){

    const [crews, setCrews] = useState([])
    const [employees, setEmployees] = useState([])
    const [blocks, setBlocks] = useState([])

    useEffect(() => {
      
        // Load all employees from Employees collection
        async function loadEmployees(){
            setEmployees(await getEmployees())
        }
  
        // Load all crews from Crews collection
        async function loadCrews(){
            setCrews(await getCrews())
        }

        // Load all blocks from Blocks collection
        async function loadBlocks(){
            setBlocks(await getBlocks())
        }

        loadEmployees()
        loadCrews()
        loadBlocks()
  
        return;
    }, []);

    return(
        <>
        <PMNavigation/>
            <h1>Create Crew Report</h1>
            
        </>
    )
}

export default CreateCrewReport;