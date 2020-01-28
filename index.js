const inquirer = require("inquirer");
const employee = require("./lib/employees");

let testEmployee = new employee.Manager("Sam", "001", "Bossman", "UVA");

// Array for storing engineer employees
let engineerArray = [];

// Array for storing interns
let internArray = [];

// Object to store manager
let manager;

// Initialization Question
const initialQuestion = [
  {
    type: "confirm",
    name: "boss",
    message: "Are you the manager of this project?"
  }
];
// questions array called for manager
const managerQuestions = [
  {
    // Manager Name
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    // Manager ID
    type: "input",
    message: "What is your employee ID",
    name: "id"
  },
  {
    // Manager Email
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    
  }
];

// Questions array called for interns
const internQuestions = [
  {
    // Intern Name
    type: "input",
    message: "What is this intern's name?",
    name: "name"
  },
  {
    // Intern ID
    type: "input",
    message: "What is their employee ID",
    name: "id"
  },
  {
    // Intern ID
    type: "input",
    message: "What is their email?",
    name: "email"
  },
  {
    // Intern School
    type: "input",
    message: "Where did this intern go to school?",
    name: "school"
  },
  {
    // Check to see if you want to add more
    type: "confirm",
    message: "Would you like to add another intern?",
    name: "add"
  }
];

const engineerQuestions = [
  {
    // Engineer Name
    type: "input",
    message: "What is this engineer's name?",
    name: "name"
  },
  {
    // Engineer ID
    type: "input",
    message: "What is their employee ID",
    name: "id"
  },
  {
    // Engineer ID
    type: "input",
    message: "What is their email?",
    name: "email"
  },
  {
    // Engineer Github
    type: "input",
    message: "What is this engineer's github username?",
    name: "github"
  },
  {
    // Check to see if you want to add more
    type: "confirm",
    message: "Would you like to add another engineer?",
    name: "add"
  }
];

const initialize = () => {
  inquirer.prompt(initialQuestion).then(answers => {
    if (answers.boss === true) {
      addManager();
    } else {
      console.log("You're not a manager. Only managers can create new teams.");
      return;
    }
  });
};
const addManager = () => {
  inquirer.prompt(managerQuestions).then(answers => {
    // Sets the new manager object using user input
    manager = new employee.Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office
    );
  });
};

const addEngineers = () => {
  inquirer.prompt(engineerQuestions).then(answers => {
    // Creates a new engineer object using user input

    let engineer = new employee.Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );

    // Pushes the new engineer object to the storage array
    engineerArray.push(engineer);
    if (answers.add === true) {
      addEngineers();
    } else {
      console.log("You're done adding engineers. Let's add some interns!");
      addInterns();
    }
  });
};

const addInterns = () => {
  inquirer.prompt(internQuestions).then(answers => {
    // Creates a new intern object using user input
    let intern = new employee.Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );

    // Pushes the new intern object to the storage array
    internArray.push(intern);
    if (answers.add === true) {
      addInterns();
    } else console.log("You're done adding interns!");
  });
};

addEngineers();
