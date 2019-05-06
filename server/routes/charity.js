const router = require('express').Router();
const axios = require('axios');

router.get(`/`, (req, res) => {
  axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=ad60fc1b&app_key=d905962cb8b5dbd0f55db21e8c8ba7fc`)
    .then(response => {
      console.log(response.data);
    })
    .catch(console.log(err));
});

module.exports = router;