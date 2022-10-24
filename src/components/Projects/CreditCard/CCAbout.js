import React from 'react';
import Navigation from './../../Navigation/Navigation.js';
import Card from 'react-bootstrap/Card';


function CCAbout(){
    return(
        <>
            {/* Navigation component with Credit Card Validation project links */}
            <Navigation 
                bg = "dark"
                expand = 'lg'
                title = {["Credit Card Validation", "/projects/credit-card"]}
                links = {[
                    ["About", "/projects/credit-card/about"],
                    ["Credit Card Validation", "/projects/credit-card"],
                ]}
            />
            <div className="App">
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Card className='main_card'>
                                <Card.Title className='main_card_title'><h1>About</h1></Card.Title>
                                <Card.Subtitle>
                                    The <strong>Credit Card Validation</strong> application is a simple client-side validation form. 
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
                                                            <strong>Deployment:: </strong>AWS Amplify
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className='col col-8'>
                                                <p className='main_about_p'>
                                                    The Continue button is disabled until all form fields are not empty and validated. The credit card images enlarge based on credit card number input. Visa begins with "4", Mastercard begins with "5".
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
        </>
    )
}

export default CCAbout;
