//Job Dojo Application

//reference express
const express = require('express');
const app = express();
app.use(express.json());

//import routes
const api = require('./routes/api');
app.use('/api', api);

//connect to mongoDB
// reference the mongoose module
let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
// connect to database
let mongoDB = require('./config/keys').mongoURI
mongoose.connect(process.env.MONGODB_URI || mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



//import keys module
const port = require('./config/keys').port;

//listen to server
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})