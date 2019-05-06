const router = require('express').Router();
const { validateLogin } = require('../../db/db.js')

//for frontend, pass in params as `{params: {username: <input>}}`
router.get('/logins', (req, res) => {
  let username = req.query.username;
  validateLogin(username, (err, data) => {
    if (err){
      console.log('Server erorr: Unable to run validateLogin script')
    }
    else {
      res.status(200).send(data);
    }
  })
});

module.exports = { logins };