const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

/********** FOR FRONT END, PASS PARMAS IN AS charityTopic ***********/
router.get(`/`, (req, res) => {
  let charityTopic = req.query.topicName;
  let causeId;
  axios.get(`https://api.data.charitynavigator.org/v2/Categories?app_id=${process.env.CHARITY_NAVIGATOR_ID}&app_key=${process.env.CHARITY_NAVIGATOR_KEY}`)
    .then(response => {
      const causeData = response.data;
      // // console.log(`charity names`, response.data[0].charityName);
      for (let i = 0; i < causeData.length; i++) {
        for (let j = 0; j < causeData[i].causes.length; j++) {
          if (causeData[i].causes[j].causeName === charityTopic) {
            causeId = causeData[i].causes[j].causeID;
            break;
          }
        }
      }
      return axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_NAVIGATOR_ID}&app_key=${process.env.CHARITY_NAVIGATOR_KEY}&causeID=${causeId}&sort=RATING`)
    })
    .then(response => {
      const charityNames = [];
      const data = response.data;
      for (let i = 0; i < data.length; i++) {
        charityNames.push({ name: data[i].charityName, mission: data[i].mission, link: data[i].websiteURL });
      }
      res.send(charityNames);
    })
    .catch(console.log);
});

module.exports = router;