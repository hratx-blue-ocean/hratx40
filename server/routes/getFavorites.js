const router = require('express').Router();
const db = require('../../db/db');

router.get('/', (req, res) => {
    const userId = Number(req.query.user_id);
    db.getFavoritedTopics(userId, (err, data) => {
        if (err) {
            console.log(err)
            res.status(404).end()
        } else {
            res.send(data.rows)
        }
    })

})

module.exports = router;