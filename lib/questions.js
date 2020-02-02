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
    message: "Would you like to add an intern or engineers?",
    choices: ["Intern", "Engineer", "The team is complete"],
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
    type: "list",
    message: "Would you like to add an intern or engineer?",
    choices: ["Intern", "Engineer", "The team is complete"],
    name: "addNext"
  }
];

module.exports = {
  intern: internQuestions,
  manager: managerQuestions,
  engineer: engineerQuestions,
  initial: initialQuestion
};
