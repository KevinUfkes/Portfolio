import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav"
import Navigation from './../../../../Navigation/Navigation.js';

function PMNavigation() {
    return(
        // Navigation component with Portfolio links
        <>
            <Navigation 
                bg = "dark"
                expand = 'lg'
                title = {["Planting Management", "/projects/planting_management"]}
                links = {[
                    ["About", "/projects/planting_management/about"],
                    ["Employees", "/projects/planting_management/employees"],
                    ["Crews", "/projects/planting_management/crews"], 
                    ["Contracts", "/projects/planting_management/contracts"],
                    ["Blocks", "/projects/planting_management/blocks"],
                ]}
                dropdownTitle = "Reports"
                dropdown = {[
                    ["Planter Reports", "/projects/planting_management/reports/planter_reports"],
                    ["Crew Reports", "/projects/planting_management/reports/crew_reports"],
                ]}
            />
        </>
    )
}

export default PMNavigation;