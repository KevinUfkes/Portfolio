import './FSM.css'
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';



function About() {

    const [states, setStates] = useState([])
    const [inputAlphabet, setInputAlphabet] = useState([])
    const [initialState, setInitialState] = useState([])
    const [finalStates, setFinalStates] = useState([])
    const [transitions, setTransitions] = useState([])

    return (
      <div className="App">
        <h1>Finite-State Machine</h1>


        
      </div>
    );
}

export default About;