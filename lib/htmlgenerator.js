const fs = require("fs");
const manager = require("../templates/manager");
const intern = require("../templates/intern");
const engineer = require("../templates/engineer");
const template = require("../templates/main");

let templateHTML = template.Template;
let managerHTML = manager.Manager;
let internHTML = intern.Intern;
let engineerHTML = engineer.Engineer;

const createPage = data => {
  fs.writeFile("../output/profile.html", data, err => {
    if (err) throw err;
  });
};

createPage(templateHTML);
