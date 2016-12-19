var db = require("../init");

function getAllUnits(req, res, next){
  db.any('select * from units')
  .then(function(data){
    res.status(200)
    .json(data);
  })
  .catch(function(err){
    return next(err);
  });  
}

function getSingleUnit(req, res, next){
  var unitID = parseInt(req.params.id);
  db.one('select * from units where id = $1', unitID)
    .then(function(data){
      res.status(200)
       .json(data);
    })
    .catch(function(err){
      return next(err);
    });
}

function createUnit(req, res, next){
  db.none('insert into units(name)' + 'values(${name})', req.body)
  .then(function(){
    res.status(200)
      .json({
        status: 'success',
        message: 'Inserted ONE unit'
      });
  })
  .catch(function(err){
    return next(err);
  });
}

function updateUnit(req, res, next){
  db.none('update units set name=$1 where id=$2', [req.body.name, parseInt(req.params.id)])
    .then(function(){
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated unit'
        });
    })
    .catch(function(err){
      return next(err);
    });
}

function removeUnit(req, res, next){
  var unitID = parseInt(req.params.id);
  db.result('delete from units where id = $1', unitID)
    .then(function(result){
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} unit`
        });
    })
    .catch(function(err){
      return next(err);
    });
}

module.exports = {
  getAllUnits: getAllUnits,
  getSingleUnit: getSingleUnit,
  createUnit: createUnit,
  updateUnit: updateUnit,
  removeUnit: removeUnit
};