import './LOTRAPI.css'
import React, { useEffect, useState } from 'react'
import Navigation from '../../Navigation/Navigation';
import axios from 'axios';

function LOTRAPI() {
    // {get_all_characters()}

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
    })

    return (
        <>
            <div className="App"> 
                <Navigation 
                    bg = "dark"
                    expand = "sm"
                    title = {["Projects", "/projects"]}
                    links = {[
                        ["Lord of the Rings API", "/projects/lotr-api"], 
                    ]}
                />
                <h1>Lord of the Rings API</h1>   
                <div className="container">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Race</th>
                        </tr>
                        {characters.map((character) => 
                            <>
                                <tr>
                                    <td>{character["name"]}</td>
                                    <td>{character.race}</td>
                                </tr>
                            </>   
                        )}
                    </table>
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