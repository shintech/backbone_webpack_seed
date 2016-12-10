var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require("pg-promise")(options);
var db = pgp("postgres://postgres:postgres@localhost:5432/api");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/static'));

var router = express.Router();

router.use(function(req, res, next){
  console.log("%s %s - %s", (new Date).toString(), req.method, req.url);
  next();
});

  // Routes go here
  
app.use('/api', router);

var server = app.listen(8000, function(){
  console.log("Listening on port 8000...");
});

module.exports = server;