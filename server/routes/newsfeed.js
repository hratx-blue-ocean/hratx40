const router = require("express").Router();
const axios = require("axios");
require('dotenv').config({path: '../../.env'})

router.get("/", (req, res) => {
  let keyword = req.query.topic;
  axios.get(`https://newsapi.org/v2/everything?q="${keyword}"&sortBy=popularity&language=en&apiKey=${process.env.NEWS_KEY}`)
    .then((data) => {
      console.log(data)
      res.send(data.data.articles)
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    })
})

module.exports = router;