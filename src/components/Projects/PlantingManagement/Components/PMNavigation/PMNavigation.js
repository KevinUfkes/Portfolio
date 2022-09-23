import React from 'react';
import Navigation from './../../../../Navigation/Navigation.js';

function PMNavigation() {
    return(
        <Navigation 
        bg = "dark"
        expand = 'lg'
        title = {["Planting Management", "/projects/planting_management"]}
        links = {[
            ["About", "/projects/planting_management/about"],
            ["Employees", "/projects/planting_management/employees"],
            ["Crews", "/projects/planting_management/crews"], 
            ["Contracts", "/projects/planting_management/contracts"],
            ]}
        />
    )
}

export default PMNavigation;