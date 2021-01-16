// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util") //library
const asyncWrite = util.promisify(fs.writeFile)
// TODO: Create an array of questions for user input

const generateREADME = (answers) =>
`# ${answers.name}</h1>`

inquirer
.prompt([
  {
    type: 'input',
    message: 'What is the title of this project?',
    name: 'Title',
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github user name?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your project.",
    
  },
  {
    type: 'input',
    name: 'install',
    message: 'What is the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are you using this for?',
  },
  {
    type: 'input',
    message: 'How are you contributing to this project?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Can you provide any test written?',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Choose a license',
    name: 'License',
    choices: ["Open Source Initiative (OSI)","GNU General Public License, version 3 (GPLv3)","Apache License 2.0","MIT",]
  },
 
  {
      type: 'input',
      name: 'email',
      message: 'What is your email address name?',
  },

  ]).then((answers) => {
          const filename = `${answers.github}.md`;
          return asyncWrite(filename, generateREADME(answers))}
      ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)});
  
      // err ? console.log(err) : console.log("Success!")
// TODO: Create a function to write README file
// function writeFile(fileName, data) {
//   fs.writeFile(fileName, data);
//   const filename = `${generateREADME.github}.md`;
//   return asyncWrite(fileName,data(questions))
  
    
// // add something to filename to make it read the path of the current folder
// }inquirer.prompt(questions).then((response) => {
//   console.log(response);
//   writeFile("README.md", GenMarkdown(questions))
// })
// TODO: Create a function to initialize app
// function init() {
 
//   });
// }

// Function call to initialize app
// init();

// create the someFunctionToGenerateMarkdown which should generate the right readme structure
// pass into this function the response

    // {
    //     const filename = `${inquiryResponses.title}.md`;
    //     return asyncWrite(filename, generateREADME(inquiryResponses) )}
    // ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)}) ;
    // err ? console.log(err) : console.log("Success!")