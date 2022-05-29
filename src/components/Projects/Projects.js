import './Projects.css'
import React from 'react'
import Navigation from '../Navigation/Navigation';

function Projects() {
    return (
      <div className="App"> 
          <Navigation
            bg = "dark"
            expand = "sm"
            title = {["Projects", "/projects"]}
            links = {[
              ["Lord of the Rings API", "/projects/lotr-api"], 
            ]}
          />
          <h1>Projects</h1>
      </div>
    );
}

export default Projects;