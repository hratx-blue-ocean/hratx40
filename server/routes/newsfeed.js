const router = require("express").Router();
const axios = require("axios");
require('dotenv').config({path: '../../.env'})

router.get("/", (req, res) => {
  let keyword = req.query.topic;
  console.log(keyword, "key")
  axios.readFile(`../cache/${keyword}.json`, (error, data) => {
    if(error) {
      console.error(error);
      res.statusCode(404).end();
    } else {
      console.log(data);
      res.send(data)
    }
  });
});

module.exports = router;