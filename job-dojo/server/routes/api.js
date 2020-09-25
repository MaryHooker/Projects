//Job routes

// reference express
const express = require('express');
const router = express.Router();

//reference authorizations

//import schemas/models
// const JobCollection = require('../model/JobSchema');

/////////////////////////////////////////////////////////////////////
//    Jobs
/////////////////////////////////////////////////////////////////////

//Create a job
router.post('/jobs',(req,res) => {
    //sanity
    console.log('Job Created');
    res.send('Job CREATED!')
});

//Read a job by title
router.get('/jobs/:title',(req,res) => {
    //sanity
    console.log('Viewing specific job!');
    res.send('viewing one job')
});

//Update a job


//Delete a job


//Export routes
module.exports = router;