//Movie Review Routes
let express = require('express');
let router = express.Router();
//import extra dependencies & secret key
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let secretKey = require('../config/keys').secretKey;

//imports models
let MovieCollection =  require('../models/MovieSchema');

// //sanity
// router.get('/test',(req,res) =>{
//     res.send(`Loud and Clear`)
// })

///////////////////////////////////////////////////
// Movie Routes
/////////////////////////////////////////////////

//Create a movie
router.post('/',(req,res) => {
    console.log(`Created a movie!`);
    // res.send(`Movie Created!`);
    MovieCollection.create(req.body,(errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Read One movie
router.get('/:movieTitle',(req,res) => {
    console.log(`Reading one movie!`);
    // res.send(`Reading one movie!`);
    MovieCollection.findOne({movieTitle:req.params.movieTitle},(errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Update a movie by title
router.put('/:movieTitle',(req,res) => {
    console.log(`Updating one movie!`);
    // res.send(`Updating one movie!`);
    MovieCollection.findOneAndUpdate({movieTitle:req.body.movieTitle}, req.body, {new:true}, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete a movie by title
router.delete('/:movieTitle',(req,res) => {
    console.log(`Deleting one movie!`);
    // res.send(`Deleting one movie!`);
    MovieCollection.findOneAndDelete({movieTitle:req.params.movieTitle},(errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all movies
router.get('/',(req,res) => {
    console.log(`Reading all movies!`);
    // res.send(`Reading all movies!`);
    MovieCollection.find({},(errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})



// //Authenticate Token Middleware
// function authenticateToken(req,res,next) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(' ')[1];
//     //If there is not token send 401 error status
//     if (token === null) {return res.status(401);
//     } else {
//     // else verify the token and user
//     jwt.verify(token, secretKey, (errors, user) => {
//         if (errors){  res.status(403).json({ error: "verification error" });
//     } else{
//         req.user = user;
//         next();
//     }
// })
// }
// }


//export route
module.exports = router;
