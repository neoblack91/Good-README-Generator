
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
    choices: ["IBM","GNU GPL v3","Apache License 2.0","MIT",]

  },
    

  ]).then((answers) => {
          const filename = `Readme.md`;
          return asyncWrite(filename, generateREADME(answers) )}

      ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)});
   }
  const generateREADME = (responses) =>
  
  {let badge 
    switch (responses.License) {
    
    case "MIT": {
       badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } 
    case "IBM": {
      badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0).';
    }
    case "Apache License 2.0": {
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    case "GNU GPL v3": {
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
    }
    }

  return `# ${responses.Title} ${badge}

# ${responses.github}


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

${responses.install}

\`\`\`

### Usage

${responses.usage}

### License

 This project is licensed under an ${responses.License} license.

## Contributing

${responses.contributing}

## Tests

To run test, run the following commands:


${responses.testInstructions}

## Questions

* If you have any questions regarding this repository, contact me either by email at <${responses.email}>, or you can find more of my work within my github account attached below. Here, you can open an issue if needed.

* [${responses.github}](https://github.com/${responses.github})
`
  }
  init();
   