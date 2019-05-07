const router = require('express').Router();
const db = require('../../db/db');

router.get('/', (req, res) => {
    const topicName = req.query.topic_name;
    db.getTopic(topicName,(err, data) => {
        if (err) { 
            res.end()
        } else {
            res.send(data.fields)
        }

    });

})

module.exports = router;