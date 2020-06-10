//create entry point
let express = require('express');
let app = express();
//Pull in port number
let portNumber = require('./config/keys').portNumber;
//json middleware/global
app.use(express.json());

//import and mount routes
let api = require('./routes/api');
app.use('/api',api);
let users = require('./routes/users');
app.use('/users',users);

//connect to mongoose
// CONNECTING TO A MONGO DB DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = require('./config/keys').mongoURI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//listen on port
app.listen(portNumber,() => {
    console.log(`Listening on port ${portNumber}`)
})