import React from 'react'
import ProjectsNavigation from './ProjectsNavigation.js'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import credit_card from './../../images/credit_card.jpg';
import planting_management from './../../images/planting_management.jpg'
import Navigation from './../Navigation/Navigation'

function Projects() {
    return (
      <div className="App"> 
      <Navigation class="app_nav"
          bg = "light"
          expand = 'lg'
          title = {["kevinufkes.ca", "/"]}
          links = {[
            // ["Home", "/"],
            ["Profile", "/profile"],
            ["About", "/about"],
            ["Projects", "/projects"], 
          ]}
        />
        {/* <ProjectsNavigation/> */}

        <div className='container'>
          <div className='row'>
            <Card className='main_card'>
              <Card.Title className='main_card_title'><h1>Projects</h1></Card.Title>
              <Card.Body>
                <div className='container'>
                  <div className='row'>
                    <div className='col col-6'>
                      <h5>Planting Mangagement Application</h5>
                        <Link to="/projects/planting_management" target="_blank"><img className='main_projects_img' src={planting_management}/></Link>
                    </div>
                    <div className='col col-6'>
                      <h5>Credit Card Form Validation</h5>
                      <Link to="/projects/credit-card" target="_blank"><img className='main_projects_img' src={credit_card}/></Link>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div> 
        </div>
      </div>
    );
}

export default Projects;