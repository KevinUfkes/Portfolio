export function testFunc(){
    return "testFunc";
}

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