const router = require('express').Router();
const passwordHash = require('password-hash');
const { handleSignup } = require('../../db/db.js')

//for frontend, pass in params as `{params: {loginInfo: <input>}}`
router.post('/', (req, res) => {
  console.log('IVE BEEN CALLED!')
  let userInfo = req.query;
  let hashed = passwordHash.generate(userInfo.password);
  userInfo.password = hashed;

  handleSignup(userInfo, (err, data)=>{
    if (err){
      console.log('failed: already signed up')
      res.end();
    }
    else {
      console.log('success!!')
      res.sendStatus(200);
    }
  });
});

module.exports = router;