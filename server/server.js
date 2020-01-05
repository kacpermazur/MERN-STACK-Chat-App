const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const uri = process.env.ATLAS_URI;

// middleware
app.use(cors()); // access resources remotly
app.use(express.json()); // -body parser-

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("SERVER: MongoDB Has Been Connected!");
});

app.listen(port, () => {
  console.log("SERVER: Started On Port: " + port);
});
