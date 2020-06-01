//Movie Review Routes
let express = require('express');
let router = express.Router();
//import extra dependencies & secret key
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let secretKey = require('../config/keys').secretKey;

//imports models
let MovieCollection = require('../models/MovieSchema');
let ForWhoCollection = require('../models/ForWhoSchema');

// //sanity
// router.get('/test',(req,res) =>{
//     res.send(`Loud and Clear`)
// })

///////////////////////////////////////////////////
// Movie Routes
/////////////////////////////////////////////////

//Create a movie
router.post('/Movie', (req, res) => {
    console.log(`Created a movie!`);
    // res.send(`Movie Created!`);
    MovieCollection.create(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Read One movie
router.get('/Movie/:movieTitle', (req, res) => {
    console.log(`Reading one movie!`);
    // res.send(`Reading one movie!`);
    MovieCollection.findOne({ movieTitle: req.params.movieTitle }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Update a movie by title
router.put('/:movieTitle', (req, res) => {
    console.log(`Updating one movie!`);
    // res.send(`Updating one movie!`);
    MovieCollection.findOneAndUpdate({ movieTitle: req.body.movieTitle }, req.body, { new: true }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete a movie by title
router.delete('/:movieTitle', (req, res) => {
    console.log(`Deleting one movie!`);
    // res.send(`Deleting one movie!`);
    MovieCollection.findOneAndDelete({ movieTitle: req.params.movieTitle }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all movies by name
router.get('/movies', authenticateToken, (req, res) => {
    console.log(`Reading all movies!`);
    // res.send(`Reading all movies!`);
    MovieCollection.find({ forWho: req.user.name }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Relate a movie to ForWho 
router.put('/movies/ForWho/:name', authenticateToken, async (req, res) => {

    let movie, forWho;

    await MovieCollection.create(req.body, (errors, results1) => {
        errors ? res.json(errors) : movie = results1;
    });

    await ForWhoCollection.findOne({ forWho: req.params.name }, (errors, results2) => {
        errors ? res.json(errors) : forWho = results2;
    });

    movie.forWho.push(forWho._id)
    movie.save();
    forWho.movies.push(movie._id);
    forWho.save();
    res.send(movie);
}
)


///////////////////////////////////////////////////
// ForWho Routes
/////////////////////////////////////////////////



//Create a ForWho
router.post('/ForWho', (req, res) => {
    console.log(`Created ForWho!`);
    // res.send(`Movie Created!`);
    ForWhoCollection.create(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Read One ForWho
router.get('/ForWho/:name', (req, res) => {
    console.log(`Reading one forWho!`);
    // res.send(`Reading one movie!`);
    ForWhoCollection.findOne({ name: req.params.name }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Update a ForWho by name
router.put('/ForWho/:name', (req, res) => {
    console.log(`Updating one ForWho!`);
    // res.send(`Updating one movie!`);
    ForWhoCollection.findOneAndUpdate({ name: req.params.name }, req.body, { new: true }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete a movie by title
router.delete('/ForWho/:name', (req, res) => {
    console.log(`Deleting one ForWho!`);
    // res.send(`Deleting one movie!`);
    ForWhoCollection.findOneAndDelete({ name: req.params.name }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all forWho
router.get('/ForWho', authenticateToken, (req, res) => {
    console.log(`Reading all ForWho!`);
    // res.send(`Reading all movies!`);
    ForWhoCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    }).populate('movies')
})


//Authenticate Token Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    //If there is not token send 401 error status
    if (token === null) {
        return res.status(401);
    } else {
        // else verify the token and user
        jwt.verify(token, secretKey, (errors, user) => {
            if (errors) {
                res.status(403).json({ error: "verification error" });
            } else {
                req.user = user;
                next();
            }
        })
    }
}


//export route
module.exports = router;
