const router = require("express").Router();
const db = require("../../db/db");

router.get("/", (req, res) => {
  const topicName = req.query.topic_name;
  db.getTopic(topicName, (err, data) => {
    if (err) {
      res.status(404).end();
    } else {
      res.send(data.rows);
    }
  });
});

module.exports = router;
