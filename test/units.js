var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var expect = chai.expect;
var db = require("../db").init;


chai.use(chaiHttp);

describe("Clear units...", function(done) {
  
  beforeEach(function(done){
    db.none('TRUNCATE units RESTART IDENTITY');
    done();
  });
  
  it('should not see data', function(done) {
    db.any('select * from units')
    .then(function(data){
      expect(data).to.deep.equal([]);
      }).then(done, done);
  });
});

describe('Units', function(){
  
  it('should add a SINGLE unit on /units POST', function(done) {
    chai.request(server)
    .post('/api/units')
    .send({"name":"name"})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list ALL units on /units/active GET', function(done){
    chai.request(server)
      .get('/api/units')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('name');
        expect(res.body[0].name).to.equal('name')
        done();
      });
  });
  
  it('should update a SINGLE unit on /units/:id PUT', function(done) {
    chai.request(server)
    .put('/api/units/1')
    .send({"name":"hello"})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list a SINGLE unit on /unit/:id GET', function(done) {
    chai.request(server)
      .get('/api/units/1')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res).to.be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name');
        expect(res.body.name).to.equal('hello')
        done();
      });    
  });
  
   
  it('should delete a SINGLE unit on /units/:id DELETE', function(done) {
    chai.request(server)
      .get("/api/units/")
      .end(function(err, res) {
        chai.request(server)
          .delete("/api/units/" + res.body[0].id )
          .end(function(error, response){
            expect(response).to.have.status(200);
            expect(response).to.be.json;
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.status('success');
            done();
          });
      });
  });
});