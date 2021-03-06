const inquirer = require ('inquirer');
const fs = require ('fs');
const Manager = require ('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
var employee = 'Manager';
const generateTeam = require('./src/template')
const team = {
    manager: '',
    engineers: [],
    interns: [],
};

const managerQuestions = [
    {
        type:    'input',
        message: `Enter the manager's name:`,
        name:    'name',
    },
    {
        type:    'input',
        message: `Enter the manager's ID:`,
        name:    'id',
    },
    {
        type:    'input',
        message: `Enter the manager's email:`,
        name:    'email',
    },
    {
        type:    'input',
        message: `Enter the manager's office number:`,
        name:    'office',
    },
];

const engineerQuestions = [
    {
        type:    'input',
        message: `Enter the engineer's name:`,
        name:    'name',
    },
    {
        type:    'input',
        message: `Enter the engineer's ID:`,
        name:    'id',
    },
    {
        type:    'input',
        message: `Enter the engineer's email:`,
        name:    'email',
    },
    {
        type:    'input',
        message: `Enter the engineer's github username:`,
        name:    'github',
    },
];

const internQuestions = [
    {
        type:    'input',
        message: `Enter the intern's name:`,
        name:    'name',
    },
    {
        type:    'input',
        message: `Enter the intern's ID:`,
        name:    'id',
    },
    {
        type:    'input',
        message: `Enter the intern's email:`,
        name:    'email',
    },
    {
        type:    'input',
        message: `Enter the intern's school:`,
        name:    'school',
    },
];

const addMEmber = [
    // {
    //     type:    'list',
    //     message: `Would you like to add another member to the team?`,
    //     name:    'add',
    //     choices: ['Yes','No']
    // },
    {
        type:    'list',
        message: `Add another team member`,
        name:    'option',
        choices: ['Engineer','Intern','Exit'],
        // when: (answers) => answers.add === 'Yes'
    },
];
function init (){
    createEmployee(employee);
    
}

createEmployee = (employee) => {
    switch (employee){
        case 'Manager':
            console.info(`Adding the team Manager`);
            inquirer.prompt (managerQuestions)
            .then((answers) => {
                    const manager = new Manager(answers.name,answers.id,answers.email,answers.office);
                    console.log(manager);
                    team.manager=manager;
            })
            .then(() => addAnotherMember());
            break;
        case 'Engineer':
            console.info(`Adding a team engineer`);
            inquirer.prompt (engineerQuestions)
            .then((answers) => {
                    const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
                    console.log(engineer);
                    team.engineers.push(engineer);
            })
            .then(() => addAnotherMember());
            break;
        case 'Intern':
            console.info(`Adding a team Intern`);
            inquirer.prompt (internQuestions)
            .then((answers) => {
                    const intern = new Intern(answers.name,answers.id,answers.email,answers.school);
                    console.log(intern);
                    team.interns.push(intern);
            })
            .then(() => addAnotherMember());
            break;
        default:
            console.log(team);
            renderTeam();
            break;
    }
}

addAnotherMember = () =>{
    inquirer.prompt(addMEmber)
    .then((response) =>{
            employee = response.option;
            createEmployee(employee);
        });
}

renderTeam = () =>{
    const css=`
    :root{
        --cardheader: #457b9d;
        --cardbody: #e9ecef;
        --jumbotron: #1d3557;
        --text: #f1faee
    }
    .jumbotron {
        background-color: var(--jumbotron);
        color: var(--text);
    }
    .card-header{
        background-color: var(--cardheader);
        color: var(--text);
    }
    .card-body{
        background-color: var(--cardbody);
    }
    .customshadow {
        box-shadow: 10px 10px 20px var(--jumbotron);
    }
    `
    fs.writeFile('dist/index.html',generateTeam(team), (err) =>
    err ? console.log(err) : console.log('Success!'));

    fs.writeFile('dist/style.css',css, (err) =>
    err ? console.log(err) : console.log('Success!'));

    fs.writeFile('index.html',generateTeam(team), (err) =>
    err ? console.log(err) : console.log('Success!'));

    fs.writeFile('style.css',css, (err) =>
    err ? console.log(err) : console.log('Success!'));
}

init();