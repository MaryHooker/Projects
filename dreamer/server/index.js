//Dreamer Application

//reference express
const express = require('express');
const app = express();
app.use(express.json());


//import routes
let dreamers = require('./routes/dreamers');
app.use('/dreamers',dreamers);



// CONNECTING TO A MONGO DATABASE
// reference the mongoose module
let mongoose = require('mongoose');
mongoose.set('useCreateIndex',true)
// connect to database
let mongoDB = require('./config/keys').mongoURI
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// listen to server
const port = require('./config/keys').port;
const host = 'localhost';
app.listen(port, host, () => {
    console.log(`listening to port ${port}`);
})
