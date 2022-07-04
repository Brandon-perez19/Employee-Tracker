import inquirer from "inquirer";
import db from "../db/connection.js";

function initializeApp () {
    console.log(
        `
        ========================
            Employee Tracker
        ========================
        `
    )
    inquirer
    .prompt([{
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role']
    }])
    .then(({choices}) => {
        if (choices == 'View all departments') {
            console.log('Viewing all Departments')
        }
        else if (choices == 'View all roles') {
            console.log('Viewing all Roles')
        }
        else if (choices == 'View all employees') {
            console.log('Viewing all Employees')
        }
        else if (choices == 'Add a department') {
            console.log('Adding a Department')
        }
        else if (choices == 'Add a role') {
            console.log('Adding a Role')
        }
        else if (choices == 'Add an employee') {
            console.log('Adding an Employee')
        }
        else {
            console.log("Updating an Employee's role")
        }
    })

}
export default initializeApp