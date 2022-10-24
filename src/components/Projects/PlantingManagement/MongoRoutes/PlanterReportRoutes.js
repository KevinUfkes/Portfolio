import axios from 'axios';

// Create new planter report in PlanterReports collection
export async function createContract(company_name, contract_code) {
    axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/create_planter_report`, {
      company_name: company_name,
      contract_code: contract_code,
      blocks: []
    }).then(response => {
      console.log(response)
      window.location.reload()
    })
  }