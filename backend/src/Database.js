const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fyp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
// Example endpoint to query the database
module.exports = (app, db) => {
    // Example endpoint to query the database
    app.get('/members', (req, res) => {
      db.query('SELECT * FROM member', (queryErr, results) => {
        if (queryErr) {
          console.error('Error querying database:', queryErr);
          return res.status(500).send('Internal Server Error');
        }
        res.json(results);
      });
    });
    // Query the database
    connection.query('SELECT * FROM member', (queryErr, results) => {
      // Release the connection back to the pool
      connection.release();

      if (queryErr) {
        console.error('Error querying database:', queryErr);
        return res.status(500).send('Internal Server Error');
      }

      // Send the query results as JSON
      res.json(results);
    });
  };

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Create a table
const createTableQuery = `
CREATE TABLE member (
    memberid INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contactno VARCHAR(15),
    email VARCHAR(255)
);

Create Book Table
CREATE TABLE book (
    bookid INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE authors (
    authorID INT PRIMARY KEY,
    bookID INT,
    authorName VARCHAR(255) NOT NULL,
    FOREIGN KEY (bookID) REFERENCES books(bookID)
  );
`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully');
  }
});

// Insert data into the table
const insertDataQuery = `
  INSERT INTO users (username, email) VALUES
    ('smsp', 'smsp@gmail.com'),
  
`;

connection.query(insertDataQuery, (err, results) => {
  if (err) {
    console.error('Error inserting data:', err);
  } else {
    console.log('Data inserted successfully');
  }

  // Close the connection
  connection.end();
});
