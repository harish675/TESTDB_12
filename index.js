const express = require('express');
const cors = require('cors'); // Import the 'cors' module
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Enable CORS middleware
app.use(cors());

app.use(express.urlencoded());
app.use('/',require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
