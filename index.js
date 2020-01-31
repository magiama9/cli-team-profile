const inquirer = require("inquirer");
const employee = require("./lib/employees");
const questions = require("./lib/questions");
const output = require("./lib/output");


// Array for storing engineer employees
let engineerArray = [];

// Array for storing interns
let internArray = [];

// Object to store manager
let manager;

// Initializes the app running
const initialize = () => {
  inquirer.prompt(questions.initial).then(answers => {
    if (answers.boss === true) {
      addManager();
    } else {
      console.log("You're not a manager. Only managers can create new teams.");
      return;
    }
  });
};

// Function to add Manager
const addManager = () => {
  inquirer.prompt(questions.manager).then(answers => {
    // Sets the new manager object using user input
    manager = new employee.Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office // Unique to manager
    );
    console.log(`Great! Let's start adding ${answers.addNext} to your team!`); 
    // User can add interns or engineers in any order
    if (answers.addNext === "Engineers") {
      addEngineers(); // Begins running through engineer adding
    } else addInterns(); // Begins running through intern adding
  });
};

// Function to add engineers
const addEngineers = () => {
  inquirer.prompt(questions.engineer).then(answers => {
    // Creates a new engineer object using user input
    let engineer = new employee.Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github // Unique to Engineers
    );
    // Pushes the new engineer object to the storage array
    engineerArray.push(engineer);
    next(answers.addNext);
  });
};

// Function to add Interns
const addInterns = () => {
  inquirer.prompt(questions.intern).then(answers => {
    // Creates a new intern object using user input
    let intern = new employee.Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school // Unique to interns
    );
    // Pushes the new intern object to the storage array
    internArray.push(intern);
    next(answers.addNext);
  });
};


// Function handling the logic of what to do after the user answers the last question
const next = str => {
  switch (str) {
    case "Engineer":
      console.log("Great! Let's add an engineer to the team.");
      addEngineers();
      break;
    case "Intern":
      console.log("Great! Let's add an intern to the team.");
      addInterns();
      break;
    default:
      // Once they are done adding to the team, runs the output functions
      output.manager(manager);
      output.engineers(engineerArray);
      output.interns(internArray);
      console.log(
        "Thank you for completing your team! Your team profile is available in /outputs/team.txt"
      );
  }
};

initialize(); // Begins the app functionality
