import React from 'react'
import Navigation from '../Navigation/Navigation.js';

function ProjectsNavigation() {
    return (
        <>
            <div className="App"> 
                <Navigation
                    bg = "dark"
                    expand = "sm"
                    title = {["Projects", "/projects"]}
                    links = {[
                    // ["Lord of the Rings API", "/projects/lotr-api"], 
                    ["Planting Management", "/projects/planting_management", "_blank"],
                    ["Credit Card Validation", "/projects/credit-card", "_blank"],
                    ["Cypress Testing", "/projects/cypress", "_blank"],
                    ]}
                />
            </div>
        </>
       
    );
}

export default ProjectsNavigation;