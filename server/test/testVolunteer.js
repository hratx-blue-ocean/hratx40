const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const expect = chai.expect();
chai.use(chaiHttp);

describe(`GET volunteer`, () => {
  it(`it should GET volunteer data based on a specific location and topic name`, (done) => {
    chai.request(`http://localhost:8000`)
      .get(`/api/volunteers?topic_name=Homeless%20Services&location=32.746682,-117.162741`)
      .then((res) => {
        res.should.have.status(200);
        res.body.should.be.a(`array`)
        done();
      })
      .catch(err => console.log(err));
  })
});