import axios from 'axios';

export async function getCrews(){
    const crewsResponse = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/crews`);
    
        if (!crewsResponse.ok) {
          const message = `An error occurred: ${crewsResponse.statusText}`;
          window.alert(message);
          return;
        }
        const crews = await crewsResponse.json();
        return crews;
}

export async function createCrew(name, crewboss, planters) {
    axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/crew/create`, {
      name: name,
      crewboss: crewboss,
      planters: planters,
    }).then(response => {
        console.log(response)
        window.location.reload()
    })
}

export async function updateCrew(crew_id, name, crewboss, planters) {
  axios.put(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/crew/update`, {
      _id: crew_id,
      data: {
          name: name,
          crewboss: crewboss,
          planters: planters
      }
  }).then(response => {
      console.log(response)
      window.location.reload()
  })
}


export async function deleteCrew(crew_id) {
    axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/crew/delete`, {
      _id: crew_id
    }).then(response => {
      console.log(response)
      window.location.reload()
    })
}