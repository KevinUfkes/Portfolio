import './Navigation.css'
import React from 'react'

function Navigation() {
    return (
      <div className="App">
        <h1>Navigation</h1>
            <ul>
                <li>
                    <a href='/'>Home - Kevin Ufkes</a>
                </li>
                <li>
                    <a href='/projects'>Projects</a>    
                </li>
            </ul>     
      </div>
    );
}

export default Navigation;