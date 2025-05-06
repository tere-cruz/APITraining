// Import the Express library, which is a minimal and flexible Node.js web application framework
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number on which the server will listen for incoming requests
const port = 8082;

//parse application/json
app.use(express.json());
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Start the server and have it listen on the defined port
// When the server is successfully running, log a message to the console
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})

//GET without parameters
// Define a route handler for GET requests to the '/api/get_all_users' endpoint
app.get('/api/get_all_users', (req,res)=>{
    //Create a variable and assign a value
    var username = "Kalilea Kalileo";
    // Send a JSON response back to the client with the username key and its value
    res.json({ username });
});

//GET using req.params with route wildcard
// Define a GET route for the path '/api/get_user/:id/:username/:email'
app.get('/api/get_user/:id/:username/:email', (req,res)=>{
 // Access parameters from the URL and Variables
    var id       = req.params.id;
    var username = req.params.username;
    var email    = req.params.email;

    //Payload/JavaScript Object 
    var user = {
        "id":id,
        "username":username,
        "email":email,
    }
    // Send a JSON response to the client containing the 'user' object
    res.json(user);
});

// Define a POST route for the path '/api/create_user'
app.post('/api/create_user', (req,res)=>{
    // Log the entire body of the incoming request to the console
    // Useful for debugging to see what data was sent from the client
    console.log(req.body);

    //extract from the request body and assign it to variables
    var email    = req.body.email;
    var username = req.body.username;
    
    //container for extracted date
    var user_payload = {
        "email":email,
        "username":username,
    } 
    // Send the 'user_payload' object back to the client as a JSON response
    res.json(user_payload);
});
// // Import the 'bcrypt' library for hashing passwords
// const bcrypt = require('bcrypt');

// // Generate a salt with a cost factor of 10 (higher = more secure but slower)
// // This salt is used to make the hash unique, even if the same password is hashed multiple times
// const salt   = bcrypt.genSaltSync(10);
// // Hash the plaintext password 'pass123' using the generated salt
// const hash   = bcrypt.hashSync('pass123',salt);

// console.log(`salt: ${salt}`);
// console.log('bcrypt: ' + hash);

// bcrypt.compare('pass123', hash, function(err, result){
//  console.log(result);
// });

const { v4: uuidv4 } = require('uuid');
//generate UUID
const random_uuid = uuidv4();
//Print UUID
console.log(random_uuid);