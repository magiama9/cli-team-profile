const inquirer = require("inquirer");
const employee = require("./lib/employees");
const htmlgen = require("./lib/htmlgenerator");

let testEmployee = new employee.Manager("Sam", "001", "Bossman", "UVA");

// Array for storing engineer employees
let engineerArray = [];
let engineerCount = 0; // Increased each time addEngineer() is called

// Array for storing interns
let internArray = [];
let internCount = 0; // Increased each time addIntern() is called

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
    type: "input",
    message: "What is your office number?",
    name: "office"
  },
  {
    type: "list",
    message: "Would you like to start adding interns or engineers?",
    choices: ["Interns", "Engineers"],
    name: "addNext"
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
    type: "list",
    message: "Would you like to add more interns or engineers?",
    choices: ["Interns", "Engineers", "The team is complete"],
    name: "addNext"
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
    console.log(manager);
    console.log("Great! Let's start adding engineers to your team!");
    if (answers.addNext === "Engineers") {
      addEngineers(); // Begins running through engineer adding
    } else addInterns(); // Begins running through intern adding
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
    engineerCount++;
    console.log(engineerArray);
    if (answers.addNext === "Engineers") {
      addEngineers(); // Loops back through if they decide to add another engineer
    } else if (answers.addNext === "Interns") {
      addInterns(); // Begins adding interns
    } else console.log("You're done creating your team!");
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
    internCount++;
    console.log(internArray);
    if (answers.addNext === "Engineers") {
      addEngineers(); // Adds another engineer
    } else if (answers.addNext === "Interns") {
      addInterns(); // Loops back through if they decide to add another intern
    } else console.log("You're done creating your team!");
  });
};

initialize();
