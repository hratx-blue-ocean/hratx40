const router = require('express').Router();
const { getHashedPassword } = require('../../db/db.js')
const { getFavoritedTopics } = require('../../db/db.js')
const passwordHash = require('password-hash');

//for frontend, pass in params as `{params: {loginInfo: <input>}}`
router.get('/', (req, res) => {
  let login = req.query;

  getHashedPassword(login, (err, hashedPassword)=>{
    if (err){
      console.log('Server error: Unable to get hashed Password');
      res.end();
    }
    else {
      console.log('Server success: hashedPassword retrieved from database');
      let validated = passwordHash.verify(login.password, hashedPassword);

      if (validated === true){
        getFavoritedTopics(login.username, (err, favorites)=>{
          if (err){
            console.log(`Server error: Unable to get favorites for ${login.username}`)
          }
          else{
            console.log('Server success: favorites.rows>>>', favorites.rows)
            res.status(200).send(favorites.rows);
          }
        })
      }
    }
  });
});

module.exports = router;