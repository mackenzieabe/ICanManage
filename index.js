const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const create = require('./src/template')
const Manager = require('./lib/Manager')

const teamMembers = []

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the manager?'
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the office number of the manager?'
    },
]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    teamMembers.push(manager)
    console.log(manager);
    // mainQuestion()
    createTeam()
})


function mainQuestion() {

}

function addEngineer() {

}

function addIntern() {

}

function createTeam() {
    fs.mkdir('dist', err => {
        if (err) throw err;
        console.log("file created")
    })

    fs.writeFile(path.join(__dirname, 'dist/team.html'), create(teamMembers), (err) => {
        if (err) throw err;
        console.log("Team has been built!")
    })
}