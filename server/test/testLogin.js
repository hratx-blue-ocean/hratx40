const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp);

describe('GET login', () => {
  it('it should GET user data', (done) => {
    chai
      .request(`http://localhost:8000`)
      .get('/api/logins?username=test-username2&password=testhashed')
      .end((err, res)=>{
        should.exist(res.body);
        should.not.exist(err);
        done();
      })
  });
});