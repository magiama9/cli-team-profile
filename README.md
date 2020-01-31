
# refactored-potato
Repo to hold CLI tool to generate team profile


## About This Tool
This is a CLI tool for programatticaly generating an text file log for a development team. A user is able to create a team of any size and any composition of engineers and interns. The resultant text output is formatted Manager -> Engineers -> Interns regardless of the order in which the user adds people to the team.

## Technological

The app is structured to separate concerns into different files and only required functionality is imported into the main application.

### Node Dependencies
Please run `npm install` in your working directory after cloning this repository.

* Inquirer - used to prompt the user and store their responses
* Jest - used for unit testing