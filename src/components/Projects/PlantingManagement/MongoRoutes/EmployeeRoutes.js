import axios from 'axios';

// Get all employees from Employees collection and return JSON
export async function getEmployees() {
    const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employees`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const employees = await response.json();
    return employees
}

// Create new employee in Employees collection
export async function createEmployee(first_name, last_name, email, roles) {
  axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee`, {
    first_name: first_name,
    last_name: last_name,
    email: email,
    roles: roles,
    crew: []
  }).then(response => {
    console.log(response)
    window.location.reload()
  })
}

// Update employee by Id in Employees collection
export async function updateEmployee(employee_id, first_name, last_name, email, roles, crew) {
  axios.put(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee/update`, {
      _id: employee_id,
      data:{
          first_name: first_name,
          last_name: last_name,
          email: email,
          roles: roles,
          crew: crew
      }
  }).then(response => {
      console.log(response)
      window.location.reload()
  })
}

// Delete employee by Id in Employees collection
export async function deleteEmployee(planter_id) {
    axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee/delete`, {
      _id: planter_id
    }).then(response => {
      console.log(response)
      window.location.reload()
    })
}

