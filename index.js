const express = require("express");
const mongoose = require("mongoose");
const routes = require("../edu_prepvii_landrover/server/routes/postRoute");
const app = express();
const port = process.env.PORT || 3000;

//database connection
const url = "mongodb://localhost/api_db";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//
app.use(express.json());

//posts middleware
app.use("/posts", routes);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
