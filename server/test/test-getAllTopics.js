const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp);

describe('GET all topics', () => {
  it('it should GET all topics data data', (done) => {
    chai
      .request(`http://localhost:8000`)
      .get('/api/getAllTopics')
      .then((res) => {
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
      .catch(err => err);
  });
});
