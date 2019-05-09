const router = require("express").Router();
const axios = require("axios");
require('dotenv').config({path: '../../.env'})

router.get("/", (req, res) => {
  let keyword = req.query.topic;
<<<<<<< HEAD
  axios.get(`https://newsapi.org/v2/everything?q="${keyword}"&sortBy=popularity&language=en&apiKey=${process.env.NEWS_KEY}`)
    .then((data) => {
      console.log(data)
      res.send(data.data.articles)
=======
  console.log(keyword, "key")
  axios.get(`https://newsapi.org/v2/everything?q=(${keyword} AND charity)&sortBy=popularity&language=en&apiKey=${process.env.NEWS_KEY}`)
    .then((results) => {
      // console.log(results.data.articles)
      res.send(results.data.articles)
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    })
})

module.exports = router;