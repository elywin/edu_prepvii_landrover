const express = require('express');
const router = express.Router();
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const url = 'mongodb://localhost/api_db';

//connect mongodb to node app using connect method
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true });

//store connection into variable db
const db = mongoose.connection;


const userRoutes = require('../edu_prepvii_landrover/server/routes/userRoute');

app.use(bodyParser.json());

app.use("/user", userRoutes);

app.listen(port,()=>{
    console.log('Server is running...')
});