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

module.exports = writeManager;
