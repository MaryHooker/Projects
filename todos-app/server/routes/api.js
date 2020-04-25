//create router
let express = require('express');
let router = express.Router();
//json middleware
router.use(express.json());

//import Schemas


//sanity
router.get('/test',(req,res) => {
    res.send(`Loud and Clear`);
})

//export route
module.exports = router;