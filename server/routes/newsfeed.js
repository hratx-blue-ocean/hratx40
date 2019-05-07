const router = require("express").Router();
const { updateNewsfeed } = require("../../db/db.js");

router.get("/news", (req, res) => {
  let currentTopic = req.query.topic;
  updateNewsfeed(currentTopic, (err, data) => {
    if (err) {
      console.error("Server error: Unable to update newsfeed");
    } else {
      res.send(data.rows)
    }
  })
})

