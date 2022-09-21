import React from 'react';
import resume_kevin_ufkes from './../../images/resume_kevin_ufkes.png'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function Profile() {
    return(
        <>
            <div className='App'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Card className='main_card'>
                                <Card.Title className='main_card_title'><h1>Profile</h1></Card.Title>
                                <Card.Body>
                                    <p className='main_p'>
                                        <ul className='main_ul'>
                                            <li>
                                                <strong>Name: </strong>Kevin Ufkes                   
                                            </li>
                                            <li>
                                                <strong>Hometown: </strong> Peterborough, ON, Canada 
                                            </li>
                                            <li>
                                                <strong>Current Residence: </strong> Nelson, BC, Canada
                                            </li>
                                        </ul>
                                    </p>
                                    <h4>Resumé</h4>
                                    <img className='main_card_img' src={resume_kevin_ufkes}/>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>               
                </div>
            </div>
        </>
    )
}

export default Profile;