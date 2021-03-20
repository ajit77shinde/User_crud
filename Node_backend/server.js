// const express = require('express');
// const bodyParser = require('body-parser');

// // create express app
// const app = express();

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// // define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });

// // listen for requests
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });




const express = require('express');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
let cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {UseNewUrlParser: true
}).then( () =>{
    console.log('Succefully connected to database')
}).catch( err =>{

    console.log("Could not connect ot database. Exiting now ...", err);
    process.exit();
}
)
// parse requests of content-type - application/json
app.use(express.json())


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
require('./app/routes/user.routes')(app);

app.listen(4000, ()=>{
    console.log("server starts at 4000")
})
