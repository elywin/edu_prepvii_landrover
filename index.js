const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./server/routes/userRoute");
const questionRoutes = require("./server/routes/postRoute");
const answers = require('./server/routes/answer');
require('dotenv').config();
const passport = require('passport')
require("./server/helpers/routeProtect")(passport)

//database connection
// const url = "mongodb://localhost/api_db";
mongoose.connect(process.env.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;

//
app.use(express.json());

//veryfying connection
db.once("open", (_) => {
  console.log("databse connected:", process.env.dbURI);
});

db.on("error", (err) => {
  console.error("connection failed:", err);
});

app.use(bodyParser.json()); //convert to json
// app.use(express.json());

//middleware
app.use("/auth", userRoutes);
app.use("/", questionRoutes);
app.use("/questions", answers);

app.listen(port, () => {
  console.log("Server is running...");
});

app.get("/", (req, res) => {
  res.send("Welcome to the EDU Landrover API");
});
