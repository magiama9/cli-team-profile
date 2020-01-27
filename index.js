const inquirer = require("inquirer");
const employee = require("./lib/employees");

let testEmployee = new employee.Manager("Sam", "001", "Bossman", "UVA");
console.log(testEmployee.getRole());

const infoGather1 = () => {
  inquirer
    .prompt([
      {
        // Engineers
        type: "input",
        message: "How many engineers are on your team?",
        name: "engineers"
      },
      {
        // Interns
        type: "input",
        message: "How many interns are on your team?",
        name: "interns"
      }
    ])
    .then(response => {
      let engineerCount = parseInt(response.engineers);
      let internCount = parseInt(response.interns);
      let teamCount = [engineerCount, internCount];
      getTeamInfo(teamCount);
    });
};


const getTeamInfo =  arr => {
  for (let i = 0; i < arr[0]; i++) {
    inquirer
      .prompt([
        {
          // Employee Name
          type: "input",
          message: "What is this engineer's name?",
          name: "name"
        },
        {
          // Employee ID
          type: "input",
          message: "What is their employee ID",
          name: "id"
        },
        {
          // Employee ID
          type: "input",
          message: "What is their email?",
          name: "email"
        },
        {
          // Employee Github
          type: "input",
          message: "What is this engineer's github username?",
          name: "github"
        }
      ])
      .then(response => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let github = response.github;
        let engineer = new employee.Engineer(name, id, email, github);
        teamArray.push(engineer);
      });
  }
  console.log(teamArray);
};

const prompts = async () => {
  let teamCount = await infoGather1();
  getTeamInfo(teamCount);
};