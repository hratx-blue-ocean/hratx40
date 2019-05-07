const router = require('express').Router();
const db = require('../../db/db');

router.post('/', (req, res) => {
    const topicId = Number(req.body.topic_id);
    const userId = Number(req.body.user_id);
    db.addFavorite(topicId,userId,(err, data) => {
        db.getFavoritedTopics(userId, (err, data) => {
            if (err) {
                res.status(404).end()
            } else {
                res.send(data.rows)
            }
        })

    });

})

module.exports = router;