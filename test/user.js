var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require('../server');
var expect = chai.expect;
var db = require("../db").init;


chai.use(chaiHttp);

describe("Clear users...", function(done) {
  
  beforeEach(function(done){
    db.none('TRUNCATE users RESTART IDENTITY');
    done();
  });
  
  it('should not see data', function(done) {
    db.any('select * from users')
    .then(function(data){
      expect(data).to.deep.equal([]);
      }).then(done, done);
  });
});

describe('Users', function(){
  
  it('should add a SINGLE user on /users POST', function(done) {
    chai.request(server)
    .post('/api/users')
    .send({"first_name":"first_name", 'last_name':'last_name', 'title':'title', 'username':'username', 'password':'password', 'phone':'5555555555', 'email':'killbill@kill.bill'})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list ALL users on /users/active GET', function(done){
    chai.request(server)
      .get('/api/users')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('first_name');
        expect(res.body[0].first_name).to.equal('first_name')
        done();
      });
  });
  
  it('should update a SINGLE user on /users/:id PUT', function(done) {
    chai.request(server)
    .put('/api/users/1')
    .send({"phone":"1111111111"})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.have.status('success');
      done();
    });
  });
  
  it('should list a SINGLE user on /user/:id GET', function(done) {
    chai.request(server)
      .get('/api/users/1')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res).to.be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('phone');
        expect(res.body.phone).to.equal('1111111111')
        done();
      });    
  });
   
  it('should delete a SINGLE user on /users/:id DELETE', function(done) {
    chai.request(server)
      .get("/api/users/")
      .end(function(err, res) {
        chai.request(server)
          .delete("/api/users/" + res.body[0].id )
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