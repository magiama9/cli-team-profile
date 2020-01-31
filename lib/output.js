const fs = require("fs");

const writeManager = obj => {
  const managerOutput =
    "_".repeat(60) +
    `\nTitle: "Manager" \nName: ${obj.name} \nEmployee ID: ${obj.id} \nEmail: ${obj.email} \nOffice Number: ${obj.officeNumber}\n` +
    "_".repeat(60);
  fs.writeFile("./output/team.txt", managerOutput, err => {
    if (err) console.log(err);
  });
};

const writeEngineers = arr => {
  arr.forEach(obj => {
    const engineerOutput =
      "_".repeat(60) +
      `\n\nTitle: "Engineer" \nName: ${obj.name} \nEmployee ID: ${obj.id} \nEmail: ${obj.email} \nGithub: ${obj.github}\n` +
      "_".repeat(60);
    fs.appendFile("./output/team.txt", engineerOutput, err => {
      if (err) console.log(err);
    });
  });
};

module.exports = {
  manager: writeManager,
  engineers: writeEngineers
};
