//Job Dojo Application

//reference express
const express = require('express');
const app = express();
app.use(express.json());

//import routes

//connect to mongoDB

//import keys module
const port = require('./config/keys').port;

//listen to server
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})