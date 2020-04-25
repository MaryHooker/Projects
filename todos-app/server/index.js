//entry point
let express = require('express');
let app = express();
let portNumber = 2112;

//import and mount route
let api = require('./routes/api');
app.use('/api',api);

//connect to mongoose


//listen on port
app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}`);
})