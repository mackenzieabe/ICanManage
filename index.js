const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const create = require('./src/template')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

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
    mainQuestion()
    // createTeam()
})


function mainQuestion() {
    inquirer.prompt([
        { 
            type: 'list',
            name: 'main',
            message: 'Please choose one of the following:',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ]).then(answer => {
        switch (answer.main) {
            case 'Engineer':
                addEngineer()
                break;
            case 'Intern':
                addIntern()
                break;
            default:
                createTeam()
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {  
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the engineer?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the engineer?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is the github username of the engineer?'
        }
        
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email,answers.github)
        teamMembers.push(engineer)
        mainQuestion()
    })
}

function addIntern() {
    inquirer.prompt([
    {    
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the intern?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the intern?'
    },
    {    
        type: 'input',
        name: 'school',
        message: 'What school did the intern attend?'
    }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamMembers.push(intern)
        mainQuestion()
    })
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
