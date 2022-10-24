import React from 'react';
import PMNavigation from '../../../Components/PMNavigation/PMNavigation.js'
import Button from 'react-bootstrap/Button';

function CrewReports(){

    return(
        <>
        <PMNavigation/>
            <h1>Crew Reports</h1>
            <Button href="/projects/planting_management/reports/create_crew_report">Create Crew Report</Button>
        </>
    )
}

export default CrewReports;