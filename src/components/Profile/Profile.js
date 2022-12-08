import React from 'react';
import resume_kevin_ufkes from './../../images/resume_kevin_ufkes.png'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Navigation from './../Navigation/Navigation'

function Profile() {
    return(
        <>
            <Navigation class="app_nav"
            bg = "light"
            expand = 'lg'
            title = {["kevinufkes.ca", "/"]}
            links = {[
                // ["Home", "/"],
                ["Profile", "/profile"],
                ["About", "/about"],
                ["Projects", "/projects"], 
            ]}
            />
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
                                    <Card className='main_card'>
                                        <Card.Title className='main_card_title'><h4>Professional Development</h4></Card.Title>
                                        <Card.Body>
                                            <h5>Reforestation</h5>
                                            <p>
                                                I learned to identify what motivates me while planting trees. I planted trees for 8 years and planted over 1,000,000 trees in my career. The first five seasons I planted were very difficult.
                                                The work was very physically demanding on its own. Coupled with working in rain, snow, high winds and heatwaves, it could be excruciating. Despite all this, I wanted to master it.
                                                I returned every season having greater skill and endurance which led to an increased number and higher quality trees every season. The elements became easier to manage and I could show up every day not worrying about
                                                achieving any specific production amount. It was then I learned something valuable about my motivation.
                                            </p>
                                            <p>
                                                I felt I had mastered planting. I had little more to experience and learn while doing it. I learned that if I am going to perservere through something difficult, I need more than just a paycheck in return. 
                                                I need to be constantly growing and developing my skills. If not, the job becomes stale and I feel stangnant. Ultimately, this led to a decision to make a big shift in my career to something with a seemingly endless 
                                                ceiling of growth, learning and professional development: <strong>Computer Programming</strong>.
                                            </p>
                                            <br></br>
                                            <h5>George Brown College</h5>
                                            <p>
                                                I gained confidence in my ability to learn new skills at George Brown College. Every semester, I was introduced to 3-4 new languages and/or frameworks. At first, I found this 
                                                disheartening because it felt like starting from scratch. It felt like all of the skills developed in the previous semester were no longer applicable. Of course, this feeling did not prevent me from doing my best in 
                                                every course. It was through this experience I gained confidence in my ability to dive in to new challenges.
                                            </p>
                                            <p>
                                                I learned that if a new lanugage or framework is challenging to learn, it only becomes easier. Within a week or two, I was able to write small programs and gain a feel for the syntax and quirks. By the end of each
                                                semester, I was able to write complex applications and was confident in my ability. This gave me immense confidence in tackling new challenges. Now, I am able to turn a feeling of being overwhelmed into excitement beacuse
                                                I have identified an opportunity to grow and develop my expertise. 
                                            </p>
                                            <br></br>
                                            <h5>RoboDK</h5>
                                            <p>
                                                At RoboDk, I learned to be self-reliant and self-motivated. I was working on a project mainly on my own as a front-end developer with ReactJS. I met with my manager once a week. I was not required to log a specific number of hours and there
                                                were no strict deadlines for deliverables. I found this challenging because I had to solve many problems on my own.
                                            </p>
                                            <p>
                                                I handled this by breaking down the product requirements in to very granular tasks. I also added these tasks to the GitHub repository to maintain transparency. Having these clear and granular tasks gave me 
                                                confidence in my production. Even if larger features were not fully functional yet, I knew that I was getting closer every day. Through this experience I learned that I have the ability to adapt 
                                                to a self-reliant work style. If left on my own, I am able to take necessary initative to ensure my productivity and value to any team. 
                                            </p>
                                            <br></br>
                                            <h5>STS Inc</h5>
                                            <p>
                                                At STS Inc I learned the meaning of a supportive team and the value of taking initiative. I worked at STS as a hybrid of manual tester and automation engineer in test. For automated testing, I used Cypress.io. 
                                                The team at STS is very friendly and likes to keep in-touch throughout the day. Humour was very valuable, but never at the expense of delivering a professional service. If anyone is struggling with a task, the 
                                                question is always: "How can I help you? What do you need?". I learned that a positive supportive team allows for a relaxed atmosphere that brings out the best work in all team members.
                                            </p>
                                            <p>
                                                I learned to take initiative at STS. My primary task was to write test-case scripts in Cypress. I wrote many test-cases and in doing so, I identified functions and designs that were not optimal. I took note of 
                                                these issues and brought them to my team-lead. She would most often give me the go-ahead to make the changes I felt were important. I found it very rewarding to step outside of my defined tasks and work on problems
                                                I identified. It was rewarding to see my contributions create easier work in the future and a more robust testing suite.
                                            </p>
                                        </Card.Body>
                                       
                                    </Card>
                                    
                                    <Card className='main_card'>
                                        <Card.Title className='main_card_title'><h4>Resumé</h4></Card.Title>
                                        <Card.Body>
                                            <img className='main_card_img' src={resume_kevin_ufkes}/>
                                        </Card.Body>
                                    </Card>                       
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