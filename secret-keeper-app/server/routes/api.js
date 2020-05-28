//Movie Review Routes
let express = require('express');
let router = express.Router();
//import extra dependencies & secret key
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let secretKey = require('../config/keys').secretKey;

//imports models
let PersonalCollection = require('../models/PersonalSchema');
let BankingCollection = require('../models/BankingSchema');
let IdentityCollection = require('../models/IdentitySchema');

// //sanity
// router.get('/test',(req,res) =>{
//     res.send(`Loud and Clear`)
// })

///////////////////////////////////////////////////
// Personal Routes
/////////////////////////////////////////////////

//Create a secret
router.post('/secret/personal',(req,res) => {
    console.log(`Created a secret!`);
    // res.send(`Secret Created!`);
    PersonalCollection.create( req.body, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read One secret
router.get('/secret/personal/:For',(req,res) => {
    console.log(`Reading one secret!`);
    // res.send(`Reading one secret!`);
    PersonalCollection.findOne({For:req.params.For}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Update secret by For
router.put('/secret/personal/:For',(req,res) => {
    console.log(`Updating one secret!`);
    // res.send(`Updating one secret!`);
    PersonalCollection.findOneAndUpdate({For:req.body.For}, req.body, {new:true}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Delete secret by For
router.delete('/secret/personal/:For',(req,res) => {
    console.log(`Deleting one secret!`);
    // res.send(`Deleting one secret!`);
    PersonalCollection.findOneAndDelete({For:req.params.For}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read all personal secret
router.get('/secret/personal',(req,res) => {
    console.log(`Reading all secrets!`);
    // res.send(`Reading all secrets!`);
    PersonalCollection.find({}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read all Personal secret
router.get('/secret/personal/For/:For',(req,res) => {
    console.log(`Reading all secrets!`);
    // res.send(`Reading all secrets!`);
    BankingCollection.find({For: req.params.For}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})
//////////////////////////////////////////////////
// Banking Routes
/////////////////////////////////////////////////

//Create a secret
router.post('/secret/banking',(req,res) => {
    console.log(`Created a secret!`);
    // res.send(`Secret Created!`);
    BankingCollection.create( req.body, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read One secret
router.get('/secret/banking/:For',(req,res) => {
    console.log(`Reading one secret!`);
    // res.send(`Reading one secret!`);
    BankingCollection.findOne({For:req.params.For}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Update secret by For
router.put('/secret/banking/:For',(req,res) => {
    console.log(`Updating one secret!`);
    // res.send(`Updating one secret!`);
    BankingCollection.findOneAndUpdate({For:req.body.For}, req.body, {new:true}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Delete secret by For
router.delete('/secret/banking/:For',(req,res) => {
    console.log(`Deleting one secret!`);
    // res.send(`Deleting one secret!`);
    BankingCollection.findOneAndDelete({For:req.params.For}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read all Banking secret
router.get('/secret/banking',(req,res) => {
    console.log(`Reading all secrets!`);
    // res.send(`Reading all secrets!`);
    BankingCollection.find({}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read all Banking secret
router.get('/secret/banking/For/:For',(req,res) => {
    console.log(`Reading all secrets!`);
    // res.send(`Reading all secrets!`);
    BankingCollection.find({For: req.params.For}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//////////////////////////////////////////////////
// Identity Routes
/////////////////////////////////////////////////

//Create a secret
router.post('/secret/identity',(req,res) => {
    console.log(`Created a secret!`);
    // res.send(`Secret Created!`);
    IdentityCollection.create( req.body, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read One secret
router.get('/secret/identity/:For',(req,res) => {
    console.log(`Reading one secret!`);
    // res.send(`Reading one secret!`);
    IdentityCollection.findOne({For:req.params.For}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Update secret by For
router.put('/secret/identity/:For',(req,res) => {
    console.log(`Updating one secret!`);
    // res.send(`Updating one secret!`);
    IdentityCollection.findOneAndUpdate({For:req.body.For}, req.body, {new:true}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Delete secret by For
router.delete('/secret/identity/:For',(req,res) => {
    console.log(`Deleting one secret!`);
    // res.send(`Deleting one secret!`);
    IdentityCollection.findOneAndDelete({For:req.params.For}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read all Identity secret
router.get('/secret/identity',(req,res) => {
    console.log(`Reading all secrets!`);
    // res.send(`Reading all secrets!`);
    IdentityCollection.find({}, (errors,results) => {
        errors ? res.json({error:errors}) : res.send(results);
    })
})

//Read all Identity secret
router.get('/secret/identity/For/:For',(req,res) => {
    console.log(`Reading all secrets!`);
    // res.send(`Reading all secrets!`);
    IdentityCollection.find({For: req.params.For}, (errors,results) => {
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
