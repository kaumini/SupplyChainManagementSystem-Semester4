const mysql = require('mysql');

const db =  mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'SCMS'
});

db.connect(err=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log('Database connected!');
});

module.exports = {db};