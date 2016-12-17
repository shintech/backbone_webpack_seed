var express = require("express");
var app = express();
var path = require("path")
var bodyParser = require("body-parser");
var config = require("./_config");
var session = require("express-session");
var RedisStore = require("connect-redis")(session);
var routes = require("./routes");
var port = process.env.PORT || '8000';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'app/static')));

app.use('/api', routes);

var server = app.listen(port, function(){
  console.log("Listening on port " + port + "...");
});

module.exports = server;