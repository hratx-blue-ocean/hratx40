const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp);

describe('post addFavorites', () => {
  it('it should post favorite data', () => {
    chai
      .request(`http://localhost:8000`)
      .post('/api/addFavorites').type('form').send({
        "topic_id": "1",
        "user_id": "1"
      })
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.equal('success');
        done();
      })
      .catch(err => err);
  });
});
