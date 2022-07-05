import { getTable } from "console.table";
import inquirer from "inquirer";
import db from "../db/connection.js";

function idRetrival(roleName, roleSalary, roleDepartment) {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`
    const id = `SELECT id FROM department WHERE name = ? `
    db.query(id, roleDepartment, (err, result) => {
        console.log(result);
        var id = result[0].id;
        var value = [roleName, roleSalary, id]

        db.query(sql, value, (err, result) => {
            if (err) {
                console.log("error:", err.message);
                return;
            }
            console.log(`Added ${roleName} to Database!`);
            initializeApp();
        })
    });
};

function enterEmployee (employeeFirstName, employeeLastName, roleResult, managerResult){
    const sql = `INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)`
    const value = [employeeFirstName, employeeLastName, roleResult, managerResult]
    db.query(sql, value, (err, result) => {
        if (err) {
            console.log("error:", err.message)
        }
        else {
            console.log("Employee:", employeeFirstName, employeeLastName, "has been added!")
        }
        initializeApp()
    })
}

function getManagerId(employeeManager) {
    var managerResults = ''
    if (!employeeManager) {
        return null
    }
    else {
        const findManager = `SELECT id from employee WHERE name = ?`
        db.promise().query(findManager, employeeManager, (err, result) => {
            var managerResult = result[0].id
        }).then((managerResult) => {
            managerResults = managerResult
        })
        return managerResults
    }
}

const getRoleId = function (employeeRole) {
    var roleResults = ''
    const findRole = `SELECT id FROM roles WHERE title = ?`
    db.promise().query(findRole, employeeRole, (err, result) => {
    }).then(([result]) => {
        var roleResult = result[0].id
        roleResults = roleResult
        return roleResults
    })
}

function initializeApp() {
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
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }])
        .then(({ choices }) => {
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
                console.log('Adding a Department');
                addDepartment();
            }
            else if (choices == 'Add a role') {
                console.log('Adding a Role')
                addRole();
            }
            else if (choices == 'Add an employee') {
                console.log('Adding an Employee')
                addEmployee();
            }
            else {
                console.log("Updating an Employee's role")
            }
        })
}

function viewAll(value) {
    db.query(`SELECT * FROM ${value}`, (err, rows) => {
        if (err) {
            console.log("error:", err.message);
        }
        console.table(rows);
        initializeApp();
    })
};

function addDepartment() {
    inquirer
        .prompt([{
            type: "text",
            name: "departmentName",
            message: "What is the Department name?"
        }])
        .then(({ departmentName }) => {
            const sql = `INSERT INTO department (name) VALUES (?)`
            db.query(sql, departmentName, (err, result) => {
                if (err) {
                    console.log("error:", err.message);
                    return;
                }
                console.log(`Added ${departmentName} to Database!`);
                initializeApp();
            });
        });
};

function addRole() {
    inquirer
        .prompt([{
            type: "text",
            name: "roleName",
            message: "What is the name of the role?"
        },
        {
            type: "text",
            name: "roleSalary",
            message: "What is the salary for this role?"
        },
        {
            type: "text",
            name: "roleDepartment",
            message: "Which department does this role belong to?"
        }])
        .then(({ roleName, roleSalary, roleDepartment }) => {
            idRetrival(roleName, roleSalary, roleDepartment);
        });
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "text",
                name: "employeeFirstName",
                message: "What is the Employee's first name?"
            },
            {
                type: "text",
                name: "employeeLastName",
                message: "What is the Employee's last name?"
            },
            {
                type: "text",
                name: "employeeRole",
                message: "What is the Employee's role?"
            },
            {
                type: "text",
                name: "employeeManager",
                message: "Who is the Employee's manager"
            },
        ])
        .then(({ employeeFirstName, employeeLastName, employeeRole, employeeManager }) => {
            const roleId = getRoleId(employeeRole);
            const managerId = getManagerId(employeeManager);
            enterEmployee(employeeFirstName,employeeLastName, roleId, managerId)
        });
};

export default initializeApp