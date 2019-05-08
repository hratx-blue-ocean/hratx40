const router = require('express').Router();
const db = require('../../db/db');

router.get('/', (req, res) => {
    db.getAllTopics((err, data) => {
        if (err) { 
            res.status(404).end()
        } else {
            res.send(data.rows)
        }

    });

})

module.exports = router;