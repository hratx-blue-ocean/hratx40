const router = require('express').Router();
const db = require('../../db/db');

require('dotenv').config({path: '../../.env'});

router.get('/', (req, res) => {
    const topicName = req.query.topic_name;
    db.getTopic(topicName,(err, data) => {
        if (err) { 
            res.end()
        } else {
            res.send(data)
        }

    })

})

module.exports = router;