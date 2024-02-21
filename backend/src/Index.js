const express = require('express');
const mysql = require('mysql');
const DATABASE = require('./Utilities/CreateDB');
const TABLES = require('./Utilities/CreateTables');
const cred = require('./Utilities/credentials');
const cors = require('cors');
const UserRegisterController = require('../Controller/User/UserRegisterController')


// const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 5000;


// Enable CORS
app.use(cors());
app.use(express.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fyp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

UserRegisterController(app,db);


// Check Database Connection
// Connect to the database
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});
// Define a Book model
// const Book = sequelize.define('Book', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   author: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   // Add other fields as needed
// });

// // Sync the model with the database
// sequelize.sync();

// // Endpoint to search for books
// app.get('/api/search-books', async (req, res) => {
//   try {
//     // Extract the 'query' parameter from the request URL
//     const { query } = req.query;

//     // Use a SQL LIKE query for a case-insensitive search
//     const result = await Book.findAll({
//       where: {
//         [Sequelize.Op.or]: [
//           { title: { [Sequelize.Op.iLike]: `%${query}%` } },
//           { author: { [Sequelize.Op.iLike]: `%${query}%` } },
//           // Add other fields as needed
//         ],
//       },
//     });

//     // Send the search result as JSON
//     res.json(result);
//   } catch (error) {
//     // Log any errors to the console
//     console.error(error);
//     // Send a 500 Internal Server Error response if an error occurs
//     res.status(500).send('Internal Server Error');
//   }
// });

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
