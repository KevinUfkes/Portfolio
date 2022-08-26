import './Home.css'
import React from 'react'
import mygutiar01 from './../../images/myguitar01.png'

function Home() {
    return (
      <div className="App">
        <h1>Home</h1>
        <img src={mygutiar01} alt="PRS CE-24"/>
      </div>
    );
}

export default Home;