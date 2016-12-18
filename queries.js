var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var config = require("./_config");
var environment = process.env.NODE_ENV || 'development';
var pgp = require("pg-promise")(options);
var connectionString = config.postgresURI[environment];
var db = pgp(connectionString);
var database_name = connectionString.split('/');

if (process.env.NODE_ENV === "development"){
  console.log("Connected to database: " + database_name[database_name.length - 1]);
}

function getAllModels(req, res, next){
  db.any('select * from models')
  .then(function(data){
    res.status(200)
    .json(data);
  })
  .catch(function(err){
    return next(err);
  });  
}

function getSingleModel(req, res, next){
  var modelID = parseInt(req.params.id);
  db.one('select * from models where id = $1', modelID)
    .then(function(data){
      res.status(200)
       .json(data);
    })
    .catch(function(err){
      return next(err);
    });
}

function createModel(req, res, next){
  db.none('insert into models(name)' + 'values(${name})', req.body)
  .then(function(){
    res.status(200)
      .json({
        status: 'success',
        message: 'Inserted ONE model'
      });
  })
  .catch(function(err){
    return next(err);
  });
}

function updateModel(req, res, next){
  db.none('update models set name=$1 where id=$2', [req.body.name, parseInt(req.params.id)])
    .then(function(){
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated model'
        });
    })
    .catch(function(err){
      return next(err);
    });
}

function removeModel(req, res, next){
  var modelID = parseInt(req.params.id);
  db.result('delete from models where id = $1', modelID)
    .then(function(result){
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} model`
        });
    })
    .catch(function(err){
      return next(err);
    });
}

module.exports = {
  getAllModels: getAllModels,
  getSingleModel: getSingleModel,
  createModel: createModel,
  updateModel: updateModel,
  removeModel: removeModel
};