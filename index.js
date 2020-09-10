<<<<<<< HEAD
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require('./server/routes/userRoute');
const routes = require("./server/routes/postRoute");
const answers = require('./server/routes/answer');
require('dotenv').config();

//database connection
// const url = "mongodb://localhost/api_db";
mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
=======
const express = require("express");
const mongoose = require("mongoose");
const routes = require("../edu_prepvii_landrover/server/routes/postRoute");
const app = express();
const port = process.env.PORT || 3000;

//database connection
const url = "mongodb://localhost/api_db";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
>>>>>>> bad3cbed0c286f7e2d767afff396d63b0eaf1aea
const db = mongoose.connection;

//
app.use(express.json());

<<<<<<< HEAD
//veryfying connection
db.once('open', _ => {
    console.log('databse connected:', process.env.dbURI);
});

db.on('error', (err) => {
    console.error('connection failed:', err);
});

app.use(bodyParser.json()); //convert to json
// app.use(express.json());


//middleware
app.use("/auth", userRoutes);
app.use("/posts", routes);
app.use('/questions',answers);


app.listen(port, () => {
    console.log('Server is running...')
});

app.get('/', (req, res) => {
    res.send("Welcome to the EDU Landrover API")
})




=======
//posts middleware
app.use("/posts", routes);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
>>>>>>> bad3cbed0c286f7e2d767afff396d63b0eaf1aea
