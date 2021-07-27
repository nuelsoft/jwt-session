const express = require('express');
const DB = require('./config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

DB.connect();

app.use("/", require("./routes"));

module.exports = app;
