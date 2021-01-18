//Knowledge Routes

//reference express framework
const express = require('express');
const router = express.Router();

//reference authorizations

//import schemas/models

////////////////////////////////////
//      Languages    
////////////////////////////////////

//create a language
router.post('/language', (req,res) => {
    // console.log(`language created!`);
    res.send(`language created!`)
})

//read a language

//update a language

//delete a language

//read all languages



////////////////////////////////////
//      Concepts    
////////////////////////////////////


////////////////////////////////////
//      Terminal    
////////////////////////////////////

//export route
module.exports = router;