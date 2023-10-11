const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const sanitizer = require("express-sanitizer");
require('dotenv').config();

// initialization(s)
const app = express();

// Use 3rd party middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(sanitizer());

// Use 1st party middleware
app.use(express.static("public"))
app.use("/pages",express.static("public/pages"));
app.use(require("./routes.js"));


// START
try {
  mongoose.connect(process.env.MONGODB_URI_OLD);
} catch (error) {
  console.log(error);
}

// END
app.listen(3000);
