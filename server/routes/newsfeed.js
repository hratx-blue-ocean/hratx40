const router = require("express").Router();
const axios = require("axios");
require('dotenv').config({path: '../../.env'})

router.get("/", (req, res) => {
  let keyword = req.query.topic;
  console.log(keyword, "key")
  axios.get(`https://newsapi.org/v2/everything?q=(${keyword} AND charity)&sortBy=popularity&language=en&apiKey=${process.env.NEWS_KEY}`)
    .then((results) => {
      // console.log(results.data.articles)
      res.send(results.data.articles)
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    })
})

module.exports = router;