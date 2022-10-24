import React from 'react';
import PMNavigation from '../../../Components/PMNavigation/PMNavigation.js';
import Button from 'react-bootstrap/Button';

function PlanterReports(){

    return(
        <>
            <PMNavigation/>
            <h1>Planter Reports</h1>
            <Button href="/projects/planting_management/reports/create_planter_report">Create Planter Report</Button>
        </>
    )
}

export default PlanterReports;