//Movie Review Routes
let express = require('express');
let router = express.Router();
//import extra dependencies & secret key
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let secretKey = require('../config/keys').secretKey;

//imports models

//sanity
router.get('/test',(req,res) =>{
    res.send(`Loud and Clear`)
})

///////////////////////////////////////////////////
// Password Routes
/////////////////////////////////////////////////

//Create a password
router.post('/password',(req,res) => {
    console.log(`Created a password!`);
    res.send(`Password Created!`);
})

//Read One password
router.get('/password/:title',(req,res) => {
    console.log(`Reading one password!`);
    res.send(`Reading one password!`);
})

//Update a password by title
router.put('/password/:title',(req,res) => {
    console.log(`Updating one password!`);
    res.send(`Updating one password!`);
})

//Delete a password by title
router.delete('/password/:title',(req,res) => {
    console.log(`Deleting one password!`);
    res.send(`Deleting one password!`);
})

//Read all passwords
router.get('/password',(req,res) => {
    console.log(`Reading all passwords!`);
    res.send(`Reading all passwords!`);
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
