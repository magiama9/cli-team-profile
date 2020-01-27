const inquirer = require("inquirer");
const employee = require("./lib/employees");

let testEmployee = new employee.Intern("Sam", "001", "Bossman", "UVA");
console.log(testEmployee.getRole());