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
      .post('/api/addFavorites').type('application/json').send({
        "topic_id": "1",
        "user_id": "1"
      })
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.equal(
          [
            {
                "topic_id": 1,
                "topic_name": "Children's and Family Services",
                "topic_imageurl": "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/children_family.gif?utm_source=DataAPI&utm_content=9af5afa3",
                "website_url": "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=17&utm_source=DataAPI&utm_content=9af5afa3"
            }
          ]
        )
        done();
      })
      .catch(err => err);
  });
});
