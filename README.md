
# refactored-potato
Repo to hold CLI tool to generate team profile


## About This Tool

![Demo Gif](https://github.com/magiama9/refactored-potato/blob/master/assets/demo-gif.gif)

This is a CLI tool for programatticaly generating an text file log for a development team. A user is able to create a team of any size and any composition of engineers and interns. The resultant text output is formatted to display Managers, Engineers, and Interns and includes fields that are unique to each employee type (i.e. Office Number for Managers, Github Username for Engineers, and Alma Mater for Interns).

Run `node index.js` in your working directory to initialize the application. You must be a manager to create a team, but you may add engineers and interns in any order you would like. No validation is employed and no input types are enforced, so you may enter as many or as few details about each employee as you would like, but it is recommended to provide a response to each question.

When you are finished adding to your team, select `>The team is complete` to generate your team profile. Profiles are stored in `/output/team.txt`. Please note the file is overwritten each time the you finish using the tool. If you would like to create multiple team profiles, please make a copy of team.txt before running the application again.

## Technological

### File Structure

The app is structured to separate concerns into different files and only required functionality is imported into the main application. If you alter the file structure, you may impact functionality.

```

|
|---Root
|   |---Index.js => Main app file. 
|   |---Package.json => Stores Node.js Configuration
|   |---README.md
|   |---LICENSE => MIT license
|---Lib
|   |---Employees.js => Stores and exports classes for Manager, Intern, and Engineer
|   |---Output.js => Handles file writing functionality
|   |---Questions.js => Holds Inquirer questions
|---Test => You may run tests with `npm run test` in your working directory. 
|           If you change file structure or class methods, tests may fail.
|   |---Employee.test.js => Jest unit tests for basic functionality. File writing is not tested.
|   |---Enginer.test.js
|   |---Intern.test.js
|   |---Manager.test.js
|---Output
|   |---team.txt => Holds your team output. Overwritten each time team is saved.
|---Assets => Holds demos of app interface, output, and testing. You may safely erase this directory.
|

```

### Node Dependencies
Please run `npm install` in your working directory after cloning this repository to install or update the required node modules.

* Inquirer - used to prompt the user and store their responses
* Jest - used for unit testing
