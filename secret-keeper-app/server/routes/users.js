//User routes
let express = require('express');
let router = express.Router();
//import extra dependencies & secret key
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let secretKey = require('../config/keys').secretKey;

//import User Model
let UserCollection = require('../models/UserSchema');

//sanity
router.get('/test',(req,res) =>{
    res.send(`Loud and Clear`)
})

//Endpoint to Register New User
router.post('/register',(req,res) => {
    console.log(`Registering New User!`);
    // res.send(`Registering New User`);
    //check that email does not already exist in database
    UserCollection.findOne({email:req.body.email})
        .then((user) => {
            if(user) {
                //send message that user already exists
                res.json({error:`User with ${req.body.email} already exists`});

            } //else if user does not exist/ add new user
            else{
                //define new user from User Model
                let newUser = new UserCollection({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                });
                //encrypt New Users password
                bcrypt.genSalt(10, (error,salt) => {
                    bcrypt.hash(newUser.password, salt, (error,hash)=>{
                        //if hash has errors then send the error message
                        if(error){
                            console.log(`Password has not been hashed`);
                            res.status(500).json({error : error});
                        } // else if hash does not contain any errors
                        else{
                            //set password of new user to hash password
                            newUser.password = hash
                            //save the new user
                            newUser.save()
                            //send New User to database
                                .then(user => res.json(user));
                        }
                    })
                })
            }
        })
})

//Endpoint to Login User
router.post('/login',(req,res) => {
    console.log(`Logging in User!`);
    // res.send(`Logging in User`);
    UserCollection.findOne({email: req.body.email})
        .then((user) => {
            //If email does NOT exist/ send a 404 message
            if(!user) {
                res.status(404).json({error:`User with email ${req.body.email} not found`})
            }// else if user DOES exist
            else{
                //compare password passed in request body with hashed password in database
                bcrypt.compare(req.body.password, user.password)
                    .then(isMatch => {
                        //if password match
                        if(isMatch){
                             // define payload with id, name, and email properties from database
                            //Include anything we will need later to authorize access for user to certain components in client side
                            let payload = {
                                id: user._id,
                                name: user.name,
                                email: user.email
                            }
                            // create JWT using sign method and passing in payload, secret key and chosen expiration time
                            jwt.sign(payload,secretKey, {expiresIn: 120}, (error,token) => {
                                //ternary/if errors send errors/ else send token
                                error ? res.status(403).json({error: error}) : res.json({token: `Bearer ${token}`});
                            })
                        }
                        //else if password don't match send error/404 message
                        else{
                            res.status(403).json({error : `Incorrect password for User email ${req.body.email}`})
                        }
                    })
            }
        })

})

//Endpoint to verifyToken and hold onto Payload
router.post('/jwtpayload', VerifyToken, (req,res) =>{
    // res.send(`Secret`);
    jwt.verify(req.token, secretKey, (errors,results) => {
        //ternary/if error verifying token send error message/else send results under message object as json
        errors ? res.status(500).json({error:`verification error`}) : res.json({message:results});
    })
})

function VerifyToken(req,res,next){
    // console.log(`Verify Token`);
    // next();
    let bearerHeader = req.headers["authorization"];
    if(bearerHeader){
        let bearer = bearerHeader.split(' ');
        let bearerToken = bearer[1];
        req.token = bearerToken;
        // console.log(req.token);
        next();
    } else {
        res.status(403).json({error : "Forbidden"});
    }
}

//export route
module.exports = router;