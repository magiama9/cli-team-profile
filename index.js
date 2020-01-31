const inquirer = require("inquirer");
const employee = require("./lib/employees");
const questions = require("./lib/questions");
const output = require("./lib/output");
// const htmlgen = require("./lib/htmlgenerator");
let testEmployee = new employee.Manager("Sam", 001, "Bossman", "UVA");
let testIntern = new employee.Intern("Bob", 002, "eng@com.com", "UVA");
let testEngineer2 = new employee.Engineer(
  "Bob",
  002,
  "eng@com.com",
  "magiama9"
);
output.manager(testEmployee);
output.engineers([testEngineer2]);
output.interns([testIntern]);

// Array for storing engineer employees
let engineerArray = [];

// Array for storing interns
let internArray = [];

// Object to store manager
let manager;

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
const addManager = () => {
  inquirer.prompt(questions.manager).then(answers => {
    // Sets the new manager object using user input
    manager = new employee.Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office
    );
    console.log(manager);
    console.log(`Great! Let's start adding ${answers.addNext} to your team!`);
    if (answers.addNext === "Engineers") {
      addEngineers(); // Begins running through engineer adding
    } else addInterns(); // Begins running through intern adding
  });
};

const addEngineers = () => {
  inquirer.prompt(questions.engineer).then(answers => {
    // Creates a new engineer object using user input

    let engineer = new employee.Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );

    // Pushes the new engineer object to the storage array
    engineerArray.push(engineer);
    console.log(engineerArray);
    next(answers.addNext);
  });
};

const addInterns = () => {
  inquirer.prompt(questions.intern).then(answers => {
    // Creates a new intern object using user input
    let intern = new employee.Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );

    // Pushes the new intern object to the storage array
    internArray.push(intern);
    console.log(internArray);
    next(answers.addNext);
  });
};

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
      console.log(
        "Thank you for completing your team! Your team profile is available in /outputs/team.txt"
      );
  }
};

initialize();
