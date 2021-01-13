// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github user name?",
  },
  {
    type: "list",
    name: "username",
    message: "What is your user name?",
    choices: ["A", "B", "C"],
  },
  // {
  //   type: 'input',
  //   message: 'What is your user name?',
  //   name: 'username',
  // },
  // {
  //   type: 'input',
  //   message: 'What is your user name?',
  //   name: 'username',
  // },
  // {
  //   type: 'input',
  //   message: 'What is your user name?',
  //   name: 'username',
  // },
  // {
  //   type: 'input',
  //   message: 'What is your user name?',
  //   name: 'username',
  // },
  // {
  //   type: 'input',
  //   message: 'What is your user name?',
  //   name: 'username',
  // },
  // {
  //   type: 'input',
  //   message: 'What is your user name?',
  //   name: 'username',
  // },
  // {
  //   type: 'input',
  //   message: 'What is your user name?',
  //   name: 'username',
  // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data);
// add something to filename to make it read the path of the current folder
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // console.log(response);
    writeToFile("README.md", someFunctionToGenerateMarkdown())
  });
}

// Function call to initialize app
init();

// create the someFunctionToGenerateMarkdown whick should generate the right readme structure
// pass into this function the response
