//Movie Review Routes
let express = require('express');
let router = express.Router();
//import extra dependencies & secret key
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let secretKey = require('../config/keys').secretKey;

//imports models
let SecretCollection = require('../models/SecretSchema')

// //sanity
// router.get('/test',(req,res) =>{
//     res.send(`Loud and Clear`)
// })

///////////////////////////////////////////////////
// Secret Routes
/////////////////////////////////////////////////

//Create a secret
router.post('/secret',(req,res) => {
    console.log(`Created a secret!`);
    // res.send(`Secret Created!`);
    SecretCollection.create( req.body, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read One secret
router.get('/secret/:title',(req,res) => {
    console.log(`Reading one secret!`);
    // res.send(`Reading one secret!`);
    SecretCollection.findOne({title:req.params.title}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Update secret by title
router.put('/secret/:title',(req,res) => {
    console.log(`Updating one secret!`);
    // res.send(`Updating one secret!`);
    SecretCollection.findOneAndUpdate({title:req.body.title}, req.body, {new:true}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Delete secret by title
router.delete('/secret/:title',(req,res) => {
    console.log(`Deleting one secret!`);
    // res.send(`Deleting one secret!`);
    SecretCollection.findOneAndDelete({title:req.params.title}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read all secret
router.get('/secret',(req,res) => {
    console.log(`Reading all secrets!`);
    // res.send(`Reading all secrets!`);
    SecretCollection.find({}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
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
