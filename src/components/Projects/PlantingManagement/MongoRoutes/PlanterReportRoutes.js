import axios from 'axios';

// Create new planter report in PlanterReports collection
export async function createPlanterReport(planter, contract, block, production) {
    axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/create_planter_report`, {
        planter: planter,
        contract: contract,
        block: block, 
        production: production
    }).then(response => {
      console.log(response)
      window.location.reload()
    })
  }