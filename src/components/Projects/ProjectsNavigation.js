// import './ProjectsNavigation.css'
import React from 'react'
import Navigation from '../Navigation/Navigation.js';

function ProjectsNavigation() {
    return (
        <div className="App"> 
            <Navigation
                bg = "dark"
                expand = "sm"
                title = {["Projects", "/projects"]}
                links = {[
                ["Lord of the Rings API", "/projects/lotr-api"], 
                ["Planting", "/projects/planting"],
                ]}
            />
        </div>
    );
}

export default ProjectsNavigation;