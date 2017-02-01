var express = require("express");
var app = express();
var path = require("path")
var bodyParser = require("body-parser");
var config = require("./_config");
var morgan = require("morgan")
var routes = require("./routes");
var port = process.env.PORT || '8000';
var session = require("express-session");
var RedisStore = require("connect-redis")(session);
var Cookies = require("js-cookie")
var passport = require("passport")

if (process.env.NODE_ENV === "development"){
  app.use(morgan('dev'));
}

app.use(session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}));

require('./authentication').init(app, passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'app/static')));

app.use(passport.initialize());
app.use(passport.session());

app.get('/loginFailure', function(req, res, next) {
  res.sendFile('failure.html', { root: './' });
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/loginFailure'
}));

app.use('/api', routes);

var server = app.listen(port, function(){
  if(process.env.NODE_ENV === 'development'){
    console.log("Listening on port " + port + "...");
  }
});

module.exports = server;