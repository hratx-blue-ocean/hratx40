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
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    })
})

module.exports = router;