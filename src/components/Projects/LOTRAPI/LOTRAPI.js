import './LOTRAPI.css'
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react'
import Navigation from '../../Navigation/Navigation';
import axios from 'axios';

function LOTRAPI() {
    
    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://the-one-api.dev/v2/character',
            headers: {
                'Authorization': 'Bearer aMBYfyc0HcqUwNtRG8BV'
            }
        }).then((response) => {
            console.log(response.data.docs)
            setCharacters(response.data.docs)
        })
    }, [])

    return (
        <>
            <div className="App"> 
                <Navigation 
                    bg = "dark"
                    expand = "sm"
                    title = {["Projects", "/projects"]}xxx
                    links = {[
                        ["Lord of the Rings API", "/projects/lotr-api"], 
                    ]}
                />
                <h1>Lord of the Rings API</h1>   
                <div className="container">
                    <div className="row">
                        <div className="col col-xxl-3 inputs">
                            <Button>Characters</Button>
                        </div>
                        <div className="col col-xxl-9">
                            <Table striped bordered>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Race</th>
                                        <th>Gender</th>
                                        <th>Birth</th>
                                        <th>Death</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {characters.map((character) => 
                                        <>
                                            <tr>
                                                <td>{character["name"]}</td>
                                                <td>{character.race}</td>
                                                <td>{character.gender}</td>
                                                <td>{character.birth}</td>
                                                <td>{character.death}</td>
                                            </tr>
                                        </>   
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// function get_all_characters(){
//     axios({
//         method: 'GET',
//         url: 'https://the-one-api.dev/v2/character',
//         headers: {
//             'Authorization': 'Bearer aMBYfyc0HcqUwNtRG8BV'
//         }
//     }).then((response) => {
//         console.log(response)
//     })
// };

export default LOTRAPI;