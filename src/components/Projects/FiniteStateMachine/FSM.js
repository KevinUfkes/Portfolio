import './FSM.css'
import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            states: '',
            inputAlphabet: '',
            initialState: '',
            finalStates: '',
            transitions: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleConfigurationSubmit = this.handleConfigurationSubmit.bind(this);

    }

    handleChange(event) {
        console.log("EVENT: " + event.target.name)
        this.setState({[event.target.name]: event.target.value});

        console.log("HG: " + this.state.states)
        console.log("HG: " + this.state.inputAlphabet)
        console.log("HG: " + this.state.initialState)
        console.log("HG: " + this.state.finalStates)
        console.log("HG: " + this.state.transitions)
    }

    handleConfigurationSubmit(event) {

        console.log('HS: ' + this.state.states);
        console.log('HS: ' + this.state.inputAlphabet);
        console.log('HS: ' + this.state.initialState);
        console.log('HS: ' + this.state.finalStates);
        console.log('HS: ' + this.state.transitions);

        event.preventDefault();
    }

    render(){
        let numStates = this.state.states
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <h1>Finite-State Machine</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                        <h4>Configure FSM</h4>
                            <Form onSubmit={this.handleConfigurationSubmit}>
                                <Form.Label for="number_of_states">
                                    Number of States
                                    <Form.Control type="number" name="states" value={this.state.states} onChange={this.handleChange}></Form.Control>
                                </Form.Label>
                                <Form.Label for="number_of_states">
                                    Input Alphabet
                                    <Form.Control type="text" name="inputAlphabet" value={this.state.inputAlphabet} onChange={this.handleChange}></Form.Control>
                                </Form.Label>
                                <Form.Label for="number_of_states">
                                    Initial State
                                    <Form.Control type="dropdown" name="initialState" value={this.state.initialState} onChange={this.handleChange}></Form.Control>
                                </Form.Label> 
                                <Form.Label for="number_of_states">
                                    Number of Final States
                                    <Form.Control type="number" name="finalStates" value={this.state.finalStates} onChange={this.handleChange}></Form.Control>
                                </Form.Label>
                                <Form.Label for="number_of_states">
                                    Transitions
                                    <Form.Control type="number" name="transitions" value={this.state.transitions} onChange={this.handleChange}></Form.Control>
                                </Form.Label>
                                <Form.Control type="submit" value="Submit"></Form.Control>
                            </Form>
                        </div>
                        <div className="col-lg-9">
                            <h4>Current FSM Configuration</h4>
                            <Table>
                                <thead>
                                    <th>States</th>
                                    <th>Inputs</th>
                                    <th>Initial State</th>
                                    <th>Final States</th>
                                    <th>Transitions</th>
                                </thead>
                                <tbody>
                                    <td>
                                       
                                    </td>
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
        
}

export default About;