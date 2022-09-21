import React from 'react';
import Navigation from './../../../Navigation/Navigation.js';
import Card from 'react-bootstrap/Card'

function PMAbout() {
    return(
        <>
            <div className='pm'>
                <Navigation 
                    bg = "dark"
                    expand = 'lg'
                    title = {["Planting Management", "/projects/planting_management"]}
                    links = {[
                        ["About", "/projects/planting_management/about"],
                        ["Employees", "/projects/planting_management/employees"],
                        ["Crews", "/projects/planting_management/crews"], 
                        // ["Create Crews", "/projects/planting_management/crews/create"],
                    ]}
                />
                <div className="App">
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <Card className='main_card'>
                                    <Card.Title className='main_card_title'><h1>About</h1></Card.Title>
                                    <Card.Subtitle>
                                        The <strong>Planting Management</strong> application is designed to be a tool for tree-planting companies to use as a tool for tracking planter performance and determining an efficient configuration of workers for the maximum efficiency.
                                    </Card.Subtitle>
                                    <Card.Body>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col col-4'>
                                                    <p className='main_about_p'>
                                                        <ul className='main_ul'>
                                                            <li>
                                                                <strong>Framework: </strong>ReactJS
                                                            </li>
                                                            <li>
                                                                <strong>Database: </strong> MongoDB
                                                            </li>
                                                            <li>
                                                                <strong>Integration: </strong> MongoDB App Services HTTP Endpoints
                                                            </li>
                                                            <li>
                                                                <strong>Deployment:: </strong>AWS Amplify
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </div>
                                                <div className='col col-8'>
                                                    <p className='main_about_p'>
                                                        In its current state, the Planting Management application allows for CRUD operations on Employees and Crews. Employees are give a role "Planter" or "Crewboss". 
                                                        Based on these roles, crews can be created composed of 1 crewboss and any number of planters who are not currently in a crew. 
                                                    </p>
                                                    <p className='main_about_p'>
                                                        Future enhancements will include:
                                                        <ul >
                                                            <li>
                                                                Contracts that will contain information concerning forestry company and plantable blocks
                                                            </li>
                                                            <li>
                                                                Blocks that contain information concerning sizes, tree density, price (rough difficulty indicator) and completion progress
                                                            </li>
                                                            <li>
                                                                Reports that contain information concerning daily production, blocks planted, blocks remaining, trees remaining, crew performance and planter performance
                                                            </li>
                                                            <li>
                                                                Projected crew configurations to maximize production for the next day
                                                            </li>
                                                            <li>
                                                                Client-side and server-side validation
                                                            </li>
                                                            <li>
                                                                User authentication
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>

                                        </div> 
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default PMAbout;