import axios from 'axios';

// Get all contracts from Contracts collection and return JSON
export async function getContracts(){
  const crewsResponse = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/contracts`);
    if (!crewsResponse.ok) {
      const message = `An error occurred: ${crewsResponse.statusText}`;
      window.alert(message);
      return;
    }
    const contracts = await crewsResponse.json();
    return contracts;
}

// Create new contract in Contracts collection
export async function createContract(company_name, contract_code) {
  axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/contract/create`, {
    company_name: company_name,
    contract_code: contract_code,
    blocks: []
  }).then(response => {
    console.log(response)
    window.location.reload()
  })
}

// Update contract in Contracts collection
export async function updateContract(contract_id, company_name, contract_code, blocks) {
    axios.put(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/contract/update`, {
        _id: contract_id,
        data: {
            company_name: company_name,
            contract_code: contract_code,
            blocks: blocks
        }
    }).then(response => {
        console.log(response)
        window.location.reload()
    })
}

// Delete contract by Id in Contracts collection
export async function deleteContract(contract_id) {
    axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/contract/delete`, {
      _id: contract_id
    }).then(response => {
      console.log(response)
      window.location.reload()
    })
}