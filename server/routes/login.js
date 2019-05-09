const router = require('express').Router();
<<<<<<< HEAD
const { getHashedPassword } = require('../../db/db.js')
const { getFavoritedTopics } = require('../../db/db.js')
=======
const { getFavoritedTopics, getHashedPassword } = require('../../db/db.js')
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e
const passwordHash = require('password-hash');

//for frontend, pass in params as `{params: {loginInfo: <input>}}`
router.get('/', (req, res) => {
  let login = req.query;

<<<<<<< HEAD
  getHashedPassword(login, (err, data)=>{
    if (err){
      res.end();
    }
    else {
      let validated = passwordHash.verify(login.password, data.rows[0].hashedpw);
      if (validated === true){
        getFavoritedTopics(data.rows[0].user_id, (err, data)=>{
          if (err){
            res.end();
          }
          else{
            res.status(200).send(data.rows);
          }
        })
      }
=======
  getHashedPassword(login, (err, data) => {
    if (err || !data.rows[0]) {
      res.status(401).end();
    }
    else {
      let userInfo = data.rows[0];
      let validated = passwordHash.verify(login.password, userInfo.hashedpw);
      
      if (validated === true){
        getFavoritedTopics(data.rows[0].user_id, (err, data)=>{
          if (err){
            res.status(401).end();
          }
          else{
            userInfo.hashedpw = undefined;
            userInfo.favorites = data.rows;
            res.status(200).send(userInfo);
          }
        })
      }
      else {
        res.status(401).end();
      }
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e
    }
  });
});

module.exports = router;