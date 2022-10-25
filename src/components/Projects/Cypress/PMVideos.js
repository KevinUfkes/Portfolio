import React from 'react';
// import pm_00002_add_planter from 'https://youtu.be/u494dRzowC0'

function PMVideos(){

    return(
        <>
            <h1>Cypress Planting Management Videos</h1>
            Visit full Cypress repository <a href="https://github.com/KevinUfkes/PortfolioCypress" target="_blank">here</a>.<br/>
            <iframe 
                src='https://youtube.com/embed/u494dRzowC0' 
                title="Embedded YouTube"
                width="900"
                height="600"
                allowFullScreen
            />
            <br></br>
            {/* <video src={pm_00002_add_planter} width="1000" controls="controls"/><br/> */}
            <a href="https://github.com/KevinUfkes/PortfolioCypress/blob/main/cypress/e2e/Planting_Management/Employees/PM-00002.cy.js" target="_blank">See Cypress Code</a>
        </>
    )
}

export default PMVideos;