import './About.css'
import React from 'react';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <>
            <div className="App">
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Card className='main_card'>
                                <Card.Title className='main_card_title'><h1>About</h1></Card.Title>
                                <Card.Subtitle>
                                    <strong>kevinufkes.ca</strong> is a website intended to showcase a portion of the skills, talents and interests that I, Kevin Ufkes, possess and am passionate about. 
                                        The site will be an on-going project that will grow and change as I do. 
                                </Card.Subtitle>
                                <Card.Body>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col col-4'>
                                                <p className='main_about_p'>
                                                    <ul className='main_ul'>
                                                        <li>
                                                            <strong>Domain: </strong>Purchased from Web Hosting Canada
                                                        </li>
                                                        <li>
                                                            <strong>Deployment: </strong>AWS Amplify
                                                        </li>
                                                        <li>
                                                            <strong>Framework: </strong>ReactJS
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className='col col-8'>
                                                <p className='main_about_p'>
                                                    The website "kevinufkes.ca" is a project within itself. The process of purchasing a domain name and deploying it to the web via AWS Amplify challenged my understanding of the DevOps process. 
                                                    I have learned much through this experience and look forward to exploring further the many DevOps tools and configurations, specifically Docker, Jenkins, Travis, CircleCI and Selenium. 
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
    );
}

export default About;