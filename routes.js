var express = require("express");
var router = express.Router();
var time = require("./helpers").time;
var db = require("./queries");

if (process.env.NODE_ENV !== 'test'){
  router.use(function(req, res, next){
    var d = new Date();
    console.log("%s %s, %s - %s:%s:%s %s - %s => %s", 
      time.month(d),
      time.date(d),
      time.year(d),
      time.hour(d),
      time.minute(d),
      time.second(d),
      time.ampm(d),
      req.url,
      req.method
    );
    next();
  });
}

router.route("/models")
  .get(db.getAllModels)
  .post(db.createModel)

router.route("/models/:id")
  .get(db.getSingleModel)
  .put(db.updateModel)
  .delete(db.removeModel)

module.exports = router;