const express = require('express');
const router = express.Router();
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require('../edu_prepvii_landrover/server/routes/userRoute');


const url = 'mongodb://localhost/api_db';

//connect mongodb to node app using connect method
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true });

const db = mongoose.connection;//store connection into variable db
app.use(bodyParser.json());//convert to json

//middleware
app.use("/user", userRoutes);

app.listen(port,()=>{
    console.log('Server is running...')
});