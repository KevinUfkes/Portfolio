
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react'
// import './../../../model/projects/planting/planters.json'

// let planters = require('./../../../model/projects/planting/planters.json')

function Planter() {

    const [planters, setPlanters] = useState([]);
    const [hello, setHello] = useState([]);
 
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
        const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/plantingmanagement/planters`);

        console.log("Response: " + response)
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const planters = await response.json();
        setPlanters(planters);
        
      }
    
      getRecords();

      async function sayHello() {
        const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/helloworld`)

        const hello = await response.json();
        console.log("Hello Response: " + hello)
        setHello(hello)
      }
    
      sayHello()

      return;
    }, [planters.length]);

    


    console.log(planters[0])
    // planters = JSON.parse(planters)
    // console.log(planters)
    return (
        <>
            <div>Planters</div>
            <div className="App"> 
            <h1>{hello}</h1>
                {
                    planters.map((planter) =>
                    <div>
                        First Name: {planter.fname}
                        Last Name: {planter.lname}
                        Email: {planter.email}
                        <hr></hr>
                    </div>
                    )
                }
                
            </div>
        </>
    );
}

export default Planter;