const chai = require('chai');
const chaiHttp = require('chai-http');

// const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET example', () => {
  it('it should GET sample data', (done) => {
    chai.request(`http://localhost:8000`)
      .get('/api/example')
      .end((err, res) => {
        expect(res).to.exist;
        done();
      })
  });
  it(`it should send a status code of 200`, (done) => {
    chai.request(`http://localhost:8000`)
      .get(`/api/example`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      })
  })
  it(`it should have a res.body of an object`, (done) => {
    chai.request(`http://localhost:8000`)
      .get(`/api/example`)
      .end((err, res) => {
        expect(res.body).to.be.a(`object`);
        done();
      })
  })
});


