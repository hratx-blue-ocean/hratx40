const router = require('express').Router();
const db = require('../../db/db');

router.post('/', (req, res) => {
    const topicId = Number(req.body.topic_id);
    const userId = Number(req.body.user_id);
    db.addFavorite(topicId,userId,(err, data) => {
        if (err) { 
            res.send('error')
        } else {
            res.send('success')
        }

    });

})

module.exports = router;