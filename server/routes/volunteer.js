const router = require('express').Router();
const axios = require('axios');
require('dotenv').config({path: '../../.env'});

//topic is topic and location is latitute,longitude
router.get('/', (req, res) => {
    let topic = req.query.topic_name
    let location = req.query.location
    axios.get(`http://api.eventful.com/json/events/search?q=volunteer+%26%26+${topic}&where=${location}&within=25&app_key=${process.env.EVENTFUL_KEY}`)
    .then(data => {
        const dataArr = []
        let data1 = data.data.events.event
        for (let i = 0; i < data1.length; i++) {
            let obj = {
                name: data1[i].title,
                description: data1[i].description,
                time: data1[i].start_time,
                url: data1[i].url
            }
            dataArr.push(obj)
        }
        res.send(dataArr);
    })
    .catch(err => {
        // console.log(err)
        res.end()
    })

})

module.exports = router;

