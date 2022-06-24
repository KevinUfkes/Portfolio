import './About.css'
import React from 'react'

function About() {
    return (
      <div className="App">
        <h1>About</h1>
        <p>
            <strong>kevinufkes.ca</strong> is a website intended to showcase a portion of the skills, talents and interests that I, Kevin Ufkes, possess and am passionate about. 
            The site will be an on-going project that will grow and change as I do. 
            <br></br>
            <br></br>


            <h5>JUNE 23, 2022</h5>
            <ul>
                <li>
                    The domain has been purchased from Web Hosting Canada
                </li>
                <li>
                    The site has been deployed using AWS Amplify
                </li>
                <li>
                    The project has been constructed using React.js
                </li>
            </ul>
        </p>
      </div>
    );
}

export default About;