//create router
let express = require('express');
let router = express.Router();
//json middleware
router.use(express.json());

//import Schemas
let WorkCollection = require('../models/ToDoWorkSchema');
let PersonalCollection = require('../models/ToDoPersonalSchema');
let BillsCollection = require('../models/ToDoBillsSchema');

////////////////////////////////////////////////////////////////////////////////////////////
/////
/////     WORK Routes
/////
////////////////////////////////////////////////////////////////////////////////////////////

//Create request
router.post('/work', (req,res) => {
    console.log(`Create work task request!`);
    // res.send(`Create work task request!`);
    WorkCollection.create(req.body, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Read request by DATE
router.get('/work/:workDate', (req,res) => {
    console.log(`Read work request by date!`);
    // res.send(`Read work request by date!`);
    WorkCollection.findOne({workDate:req.params.workDate}, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Update request by DATE
router.put('/work/:workDate', (req,res) => {
    console.log(`Update work request by date!`);
    // res.send(`Update work request by date!`);
    WorkCollection.findOneAndUpdate({workDate:req.params.workDate}, req.body, {new:true}, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete request by DATE
router.delete('/work/:workDate', (req,res) => {
    console.log(`Delete work request by date!`);
    // res.send(`Delete work request by date!`);
    WorkCollection.findOneAndDelete({workDate:req.params.workDate}, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all request
router.get('/work', (req,res) => {
    console.log(`Read all work requests!`);
    // res.send(`Read all work requests!`);
    WorkCollection.find({}, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    })
})


////////////////////////////////////////////////////////////////////////////////////////////
/////
/////     PERSONAL Routes
/////
////////////////////////////////////////////////////////////////////////////////////////////

//Create request
router.post('/personal',(req,res) => {
    console.log(`Create personal task request!`)
    res.send(`Create personal task request!`);
})

//Read request by DATE
router.get('/personal/:date', (req,res) => {
    console.log(`Read personal request by date!`);
    res.send(`Read personal request by date!`);
})

//Update request by DATE
router.put('/personal/:date', (req,res) => {
    console.log(`Update personal request by date!`);
    res.send(`Update personal request by date!`);
})

//Delete request by DATE
router.delete('/personal/:date', (req,res) => {
    console.log(`Delete personal request by date!`);
    res.send(`Delete personal request by date!`);
})

//Read all request
router.get('/personal', (req,res) => {
    console.log(`Read all personal requests!`);
    res.send(`Read all personal requests!`);
})


////////////////////////////////////////////////////////////////////////////////////////////
/////
/////     BILL Routes
/////
////////////////////////////////////////////////////////////////////////////////////////////

//Create request
router.post('/bill',(req,res) => {
    console.log(`Create bill request!`)
    res.send(`Create bill request!`);
})

//Read request by BILL
router.get('/bill/:bill', (req,res) => {
    console.log(`Read bill request by bill!`);
    res.send(`Read bill request by bill!`);
})

//Update request by BILL
router.put('/bill/:bill', (req,res) => {
    console.log(`Update bill request by bill!`);
    res.send(`Update bill request by bill!`);
})

//Delete request by BILL
router.delete('/bill/:bill', (req,res) => {
    console.log(`Delete bill request by bill!`);
    res.send(`Delete bill request by bill!`);
})

//Read all request
router.get('/bill', (req,res) => {
    console.log(`Read all bill requests!`);
    res.send(`Read all bill requests!`);
})

// //sanity
// router.get('/test',(req,res) => {
//     res.send(`Loud and Clear`);
// })

//export route
module.exports = router;