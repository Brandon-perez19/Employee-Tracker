import mysql from 'mysql2'

//connect to the database
const db = mysql.createConnection(
    {
        //mysql username
        user: 'root',
        //mysql password
        password: '',
        database: 'employees'
    },
    console.log('Connected to the employees database.')
);

export default db