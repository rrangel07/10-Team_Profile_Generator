const fs = require ('fs');
const inquirer = require ('inquirer');
const Manager = require ('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
// const { async } = require('rxjs');
var employee = 'Manager';
const employeeQuestions = [
    {
        type:    'input',
        message: `Enter the employee's name:`,
        name:    'name',
    },
    {
        type:    'input',
        message: `Enter the employee's ID:`,
        name:    'id',
    },
    {
        type:    'input',
        message: `Enter the employee's email:`,
        name:    'email',
    },
];

const managerQuestions = [
    {
        type:    'input',
        message: `Enter the manager's office number:`,
        name:    'office',
    },
];
const addMEmber = [
    {
        type:    'list',
        message: `Would you like to add another member to the team?`,
        name:    'add',
        choices: ['Yes','No']
    },
    {
        type:    'list',
        message: `What position does the member hold?`,
        name:    'position',
        choices: ['Engineer','Intern'],
        when: (answers) => answers.add === 'Yes'
    },
];
function init (){
    createEmployee(employee);
    
}

createEmployee = (employee) => {
    (employee === 'Manager') ? console.info(`Creating a ${employee}`) : console.info(`Creating an ${employee}`);
    inquirer
    .prompt (employeeQuestions)
    .then((response) => {
        switch (employee){
            case 'Manager':
                const manager = new Manager(response.name,response.id,response.email,'');
                inquirer
                .prompt (managerQuestions)
                .then((response) => {
                    manager.officeNumber = response.office;
                    console.log(manager);
                })
                .then(() => addAnotherMember());
                break;
            case 'Engineer':
                break;
            case 'Intern':
                break;
            case 'Exit':
                break;
            default:
                console.log('sorry');
                break;
        }
    });
}


addAnotherMember = () =>{
    inquirer
    .prompt(addMEmber)
    .then((response) =>{
        switch (response.add){
            case 'Yes':
                employee = response.position;
                createEmployee(employee);
                break;
            case 'No':
                break;
        }
    });
}

init();