<<<<<<< HEAD
const router = require('express').Router();
const db = require('../../db/db');

router.get('/', (req, res) => {
    const topicName = req.query.topic_name;
    db.getTopic(topicName,(err, data) => {
        if (err) { 
            res.status(404).end()
        } else {
            res.send(data.rows)
        }

    });

})

module.exports = router;
=======
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
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e
