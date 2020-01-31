const inquirer = require("inquirer");
const employee = require("./lib/employees");
const questions = require("./lib/questions");
// const htmlgen = require("./lib/htmlgenerator");

 let testEmployee = new employee.Manager("Sam", "001", "Bossman", "UVA");

// Array for storing engineer employees
let engineerArray = [];
let engineerCount = 0; // Increased each time addEngineer() is called

// Array for storing interns
let internArray = [];
let internCount = 0; // Increased each time addIntern() is called

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
    console.log("Great! Let's start adding engineers to your team!");
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
