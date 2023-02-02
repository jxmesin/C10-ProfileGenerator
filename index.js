// dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

// constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/page-template.js');

const teamArr = [];
const idArr = [];

function initApp() {

    function addManager() {
        console.log("Start building your team profile");
        inquirer.createPromptModule([
            {
                type: "input",
                name: "managerName",
                message: "What's the managers name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the team's managers name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the managers ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the managers ID."
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the managers email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty."
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the managers office number?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a phone number."
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }

    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What would you like to do next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Finish team profile"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.meberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Inter":
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What's the engineers name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Engineers name can't be empty."
                }
            },
            {
                type: "input",
                name: "engineersID",
                message: "What's the engineers ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a engineers ID."
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the managers email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty."
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What's the engineers email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty."
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What's the engineers GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineers GitHub username."
                }
            }
        ]).then
    }
}
