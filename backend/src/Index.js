const express = require('express');
const mysql = require('mysql2/promise'); // Import the promise-based version
const UserRegisterController = require('../Controller/User/UserRegisterController');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());
app.use(express.json());

// MySQL connection configuration with promise support
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fyp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Use the correct function name UserRegisterController
UserRegisterController(app, db);

// Check Database Connection
// Connect to the database
db.getConnection().then(connection => {
  console.log('Connected to MySQL database');
  connection.release(); // Release the connection back to the pool
}).catch(error => {
  throw error;
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




