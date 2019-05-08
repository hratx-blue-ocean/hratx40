const router = require('express').Router();
const passwordHash = require('password-hash');
const { handleSignup } = require('../../db/db.js')

//for frontend, pass in params as `{params: {loginInfo: <input>}}`
router.post('/', (req, res) => {
  let userInfo = req.query;
  let hashed = passwordHash.generate(userInfo.password);
  userInfo.password = hashed;

  handleSignup(userInfo, (err, data)=>{
    if (err){
      res.sendStatus(400);
    }
    else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;