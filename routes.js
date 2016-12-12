var express = require("express");
var router = express.Router();

var db = require("./queries");

router.use(function(req, res, next){
  console.log("%s %s - %s", (new Date).toString(), req.method, req.url);
  next();
});

router.get('/models', db.getAllModels);
router.get('/models/:id', db.getSingleModel);
router.post('/models', db.createModel);
router.put('/models/:id', db.updateModel);
router.delete('/models/:id', db.removeModel);

module.exports = router;