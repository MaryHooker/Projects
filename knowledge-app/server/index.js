//Knowledge Application

//reference express
const express = require('express');
const app = express();
app.use(express.json());

//import routes
let api = require('./routes/api');
app.use('/api', api);

//connect to mongoDB

//listen to server
app.listen(1991, () => {
    console.log('listening on port 1991')
})  