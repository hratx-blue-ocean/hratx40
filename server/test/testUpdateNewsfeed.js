const chai = require('chai');
const chaiHttp = require('chai-http');
const should =  require('chai').should
const expect =  require('chai').expect
chai.use(chaiHttp);

// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

describe('GET news', () => {
  it('it should GET newsfeed data', (done) => {
    chai
      .request(`http://localhost:8000`)
      .get('/api/news')
      .end((err, res) => {
        expect(err).to.equal(null);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
  });
});