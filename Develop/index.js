'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util") //library
const asyncWrite = util.promisify(fs.writeFile)
// TODO: Create an array of questions for user input

function init() {
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
    type: 'input',
    name: 'email',
    message: 'What is your email address name?',
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
    message: 'Can you provide any test instructions?',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Choose a license',
    name: 'License',
    choices: ["Open Source Initiative (OSI)","GNU General Public License, version 3 (GPLv3)","Apache License 2.0","MIT",]

  },
    

  ]).then((answers) => {
          const filename = `${answers.Title}.md`;
          return asyncWrite(filename, generateREADME(answers) )}

      ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)});
   }
  const generateREADME = (responses) =>

`# ${responses.name}

# ${responses.title} 

## Description

${responses.description}

## Table of Contents

* [Installation](#install)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Contact Info](#qContactInfo)

### Installation

\`\`\`

${responses.installation}

\`\`\`

### Usage

${responses.usageInfo}

### License

 This project is licensed under an ${responses.License} license.

## Contributing

${responses.contributingGuidelines}

## Tests

To run test, run the following commands:


${responses.testInstructions}

## Questions

* If you have any questions regarding this repository, contact me either by email at <${responses.email}>, or you can find more of my work within my github account attached below. Here, you can open an issue if needed.

* [${responses.github}](https://github.com/${responses.github})
`
   init();
   
  //  switch (choices) {
    
  //   case MIT: {
  //     para.append.Title = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  //   } 
  //   case MIT: {
  //     para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
    
  //   }
  //   }

 // TODO: Create a function to initialize app


// Function call to initialize app


// create the someFunctionToGenerateMarkdown which should generate the right readme structure
// pass into this function the response

