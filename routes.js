var express = require("express");
var router = express.Router();
var units = require("./db").units;

router.route("/units")
  .get(units.getAllUnits)
  .post(units.createUnit)

router.route("/units/:id")
  .get(units.getSingleUnit)
  .put(units.updateUnit)
  .delete(units.removeUnit)

module.exports = router;