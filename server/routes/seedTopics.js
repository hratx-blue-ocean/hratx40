const router = require('express').Router();
const axios = require('axios');
const db = require('../../db/db');

router.get('/', (req, res) => {
    axios.get('https://api.data.charitynavigator.org/v2/Categories?app_id=ad60fc1b&app_key=d905962cb8b5dbd0f55db21e8c8ba7fc')
    .then(data => {
        for (let i = 0; i < data.data.length; i++) {
            for (let j = 0; j < data.data[i].causes.length; j++) {
                db.insertTopic(data.data[i].causes[j], (err, result) => {
                    if (err) {
                        res.end()
                    }
                });
            }
        }
        res.send('success')
    })
    .catch(err => {
        console.log(err)
        res.end()
    })
})

module.exports = router;