const userLoginController = (app, db) => {

    // Handle POST requests to the '/user/login' endpoint
    app.post('/user/login', (req, res) => {
  
      // Extract username and password from the request body
      const { username, password } = req.body;
  
      // SQL query to check if the provided username and password exist in the 'users' table
      
      // Execute the SQL query with the provided parameters
      db.query(sql, [username, password], (error, result) => {
  
        // If an error occurs during the database query
        if (error) {
          console.error(error);
          res.status(500).send('Error logging in user');
        } 
  
        // If a user with the provided credentials is found
        else if (result.length > 0) {
          const user = result[0];
          res.status(200).json(user);
        } 
  
        // If no user with the provided credentials is found
        else {
          res.status(401).send('Invalid credentials');
        }
  
      });
  
    });
  
  };