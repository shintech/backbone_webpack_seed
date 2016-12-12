var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/static'));

app.use('/api', routes);

var server = app.listen(8000, function(){
  console.log("Listening on port 8000...");
});

module.exports = server;