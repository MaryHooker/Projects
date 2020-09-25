//Job routes

// reference express
const express = require('express');
const router = express.Router();

//reference authorizations

//import schemas/models
const JobCollection = require('../model/JobSchema');

/////////////////////////////////////////////////////////////////////
//    Jobs
/////////////////////////////////////////////////////////////////////

//Create a job
router.post('/jobs',(req,res) => {
    //sanity
    console.log('Job Created');
    // res.send('Job CREATED!');
    JobCollection.create(req.body, (errors,results) => {
        errors ? res.send(errors): res.send(results);
    })
});

//Read a job by title
router.get('/jobs/:company',(req,res) => {
    //sanity
    console.log('Viewing specific job!');
    // res.send('viewing one job');
    JobCollection.findOne({company:req.params.company}, (errors,results) => {
        errors ? res.send(errors): res.send(results);
    })
});

//Update a job by title
router.put('/jobs/:company',(req,res) => {
    //sanity
    console.log('Updating specific job!');
    // res.send('Updating job');
    JobCollection.findOneAndUpdate({company:req.params.company}, req.body, (errors,results) => {
        errors ? res.send(errors): res.send(results);
    })
});


//Delete a job by title
router.delete('/jobs/:company',(req,res) => {
    //sanity
    console.log('Deleting specific job!');
    // res.send('Deleting job');
    JobCollection.findOneAndDelete({company:req.params.company}, (errors,results) => {
        errors ? res.send(errors): res.send(results);
    })
});

//Viewing all jobs
router.get('/jobs',(req,res) => {
    //sanity
    console.log('Viewing all jobs!');
    // res.send('viewing one job');
    JobCollection.find({}, (errors,results) => {
        errors ? res.send(errors): res.send(results);
    })
});


//Export routes
module.exports = router;