const router = require('express').Router();
const { getHashedPassword } = require('../../db/db.js')
const { getFavoritedTopics } = require('../../db/db.js')
const passwordHash = require('password-hash');

//for frontend, pass in params as `{params: {loginInfo: <input>}}`
router.get('/', (req, res) => {
  let login = req.query;

  getHashedPassword(login, (err, data) => {
    if (err) {
      res.end();
    }
    else {
      let validated = passwordHash.verify(login.password, data.rows[0].hashedpw);
      if (validated === true) {
        getFavoritedTopics(data.rows[0].user_id, (err, data) => {
          if (err) {
            res.status(401).end();
          }
          else {
            res.status(200).send(data.rows);
          }
        })
      }
    }
  });
});

module.exports = router;