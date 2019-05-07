const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp);

describe('GET search', () => {
  it('it should GET search data', () => {
    chai
      .request(`http://localhost:8000`)
<<<<<<< HEAD
      .get('/api/search?topic_name=social')
=======
      .get('/api/searchTopics?topic_name=social')
>>>>>>> abefb9d5647db8b8aaeefdf434645c86bc5e0aac
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
      .catch(err => err);
  });
});
