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
                    ["Planting Management", "/projects/planting_management"],
                    ["Credit Card Validation", "/projects/credit-card"],
                    ]}
                />
            </div>
        </>
       
    );
}

export default ProjectsNavigation;