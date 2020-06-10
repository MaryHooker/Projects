//Dreamers/users routes

//reference express
const express = require('express');
const router = express.Router();
router.use(express.json());

//reference authorizations
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secretKey = require('../config/keys').secretOrKey;

//import schema
let DreamerCollection = require('../models/DreamerSchema');

//sanity
router.get('/test',(req,res)=> {
    console.log('Dreaming');
    res.send('Dreaming');
})

//Export Routes
module.exports = router;