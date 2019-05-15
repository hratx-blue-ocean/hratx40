const router = require("express").Router();
const { getFavoritedTopics, getHashedPassword } = require("../../db/db.js");
const passwordHash = require("password-hash");

//for frontend, pass in params as `{params: {loginInfo: <input>}}`
router.get("/", (req, res) => {
  let login = req.query;

  getHashedPassword(login, (err, data) => {
    if (err || !data.rows[0]) {
      console.log(err);
      res.status(401).end();
    } else {
      let userInfo = data.rows[0];
      let validated = passwordHash.verify(login.password, userInfo.hashedpw);

      if (validated === true) {
        getFavoritedTopics(data.rows[0].user_id, (err, data) => {
          if (err) {
            console.log(err);
            res.status(401).end();
          } else {
            userInfo.hashedpw = undefined;
            userInfo.favorites = data.rows;
            res.status(200).send(userInfo);
          }
        });
      } else {
        res.status(401).end();
      }
    }
  });
});

module.exports = router;
