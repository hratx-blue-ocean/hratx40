const router = require("express").Router();
const fs = require("file-system");
require('dotenv').config({path: '../../.env'})

router.get("/", (req, res) => {
  const keyword = req.query.topic
  console.log(keyword);
  fs.readFile(`./cache/${keyword}.json`, (error, data) => {
    if(error) {
      console.log(error);
      res.status(404).end();
    } else {
      res.send(data)
    }
  });
});

module.exports = router;