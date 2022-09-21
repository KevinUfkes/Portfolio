import React from 'react';
import resume_kevin_ufkes from './../../images/resume_kevin_ufkes.png'
import Card from 'react-bootstrap/Card';

function Profile() {
    return(
        <>
            <div className='App'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Card className='main_card'>
                                <Card.Title className='main_card_title'><h1>Profile</h1></Card.Title>
                                {/* <Card.Img className='main_card_img' src={resume_kevin_ufkes}></Card.Img> */}
                                <img className='main_card_img' src={resume_kevin_ufkes}/>
                            </Card>
                        </div>
                    </div>               
                </div>
            </div>
        </>
    )
}

export default Profile;