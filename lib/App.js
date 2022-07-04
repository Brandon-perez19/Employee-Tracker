import { getTable } from "console.table";
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
            console.log('Viewing all departments');
            viewAll("department");
        }
        else if (choices == 'View all roles') {
            console.log('Viewing all Roles');
            viewAll("roles");
        }
        else if (choices == 'View all employees') {
            console.log('Viewing all Employees');
            viewAll("employee");
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

function viewAll (value) {
    db.query(`SELECT * FROM ${value}`, (err, rows) => {
        if (err) {
            console.log("error:", err.message)
        }
        console.table(rows);
        initializeApp();
    })
};

export default initializeApp