// const chai = require('chai');
// const chaiHttp = require('chai-http');

// const should = chai.should();
// const expect = chai.expect();
// chai.use(chaiHttp);

// describe(`GET charity`, () => {
//   it(`it should GET charity data based on a specific query of a topic name`, (done) => {
//     chai.request(`http://localhost:8000`)
//       .get(`/api/charity?topicName=Homeless%20Services`)
//       .then((res) => {
//         res.should.have.status(200);
//         res.body.should.be.a(`array`)
//         done();
//       })
//       .catch(err => err);
//   })
// });