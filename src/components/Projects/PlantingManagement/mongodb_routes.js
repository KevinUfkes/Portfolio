import axios from 'axios';


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

export async function createEmployee(first_name, last_name, email, roles) {
    axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      roles: roles
    }).then(response => {
      console.log(response)
      window.location.reload()
    })
}

export async function deleteEmployee(planter_id) {
    axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/employee/delete`, {
      _id: planter_id
    }).then(response => {
      console.log(response)
      window.location.reload()
    })
}

export async function getRoles() {
    const response = await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-wadcn/endpoint/pm/roles`)
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const roles = await response.json();
    return roles;
}