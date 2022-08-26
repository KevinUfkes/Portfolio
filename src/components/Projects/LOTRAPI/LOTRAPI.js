import './LOTRAPI.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react'
import ProjectsNavigation from './../ProjectsNavigation.js';
import CustomTable from '../../CustomTable/CustomTable';
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
                <ProjectsNavigation/>
                <h1>Lord of the Rings API</h1>   
                <div className="container">
                    <div className="row">
                        <div className="col col-xxl-3 inputs">
                            <Button onClick={() => {}}>Characters</Button>
                        </div>
                        <div className="col col-xxl-9">
                            <CustomTable
                                heads = {["Name", "Race", "Gender", "Birth", "Death"]}
                                items = {characters}
                                attributes = {["name", "race", "gender", "birth", "death"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// function get_characters(){
    
// }

export default LOTRAPI;