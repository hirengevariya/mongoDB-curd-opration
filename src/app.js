
const express = require ("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongodb = require('./model/db');

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// middleware to use for all requests

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Expose-Headers", "X-My-Custom-Header, X-Another-Custom-Header");
  next(); // make sure we go to the next routes and don't stop here
});

//mount the routers in below

app.use('/api', require('./router/userRoute'));

module.exports = app;
