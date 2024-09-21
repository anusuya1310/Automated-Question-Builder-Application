// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'srima',
  user: 'localhost', // your MySQL username
  password: 'Mala_2024', // your MySQL password
  database: 'Question_Builder' // your MySQL database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;