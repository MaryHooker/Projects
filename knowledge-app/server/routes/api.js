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
    res.send(`language created!`)
})

//read a language
router.get('/language/one', (req,res) => {
    res.send(`one language read!`)
})

//update a language
router.put('/language', (req,res) => {
    res.send(`language updated!`)
})

//delete a language
router.delete('/language', (req,res) => {
    res.send(`language deleted!`)
})

//read all languages
router.get('/languages', (req,res) => {
    res.send(`reading all languages!`)
})



////////////////////////////////////
//      Concepts    
////////////////////////////////////


////////////////////////////////////
//      Terminal    
////////////////////////////////////

//export route
module.exports = router;