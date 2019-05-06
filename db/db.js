const Pool = require('pg').Pool;
require('dotenv').config({path: '../.env'});

//.env file must be inside the server folder
const pool = new Pool({
    user: process.env.DB_USER, //needs to be changed to work in your instance
    host: process.env.DB_HOST, //localhost for most
    database: process.env.DB_NAME, //blueocean is working name, open to adjustment
    password: process.env.DB_PASSWORD, //password
    port: process.env.DB_PORT //port, please put 5432 unless you have need to use another
});


const getAll = (cb) => {
    pool.query('select * from users', (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(null, data);
        }
    });
};

const insertTopic = (causeObj, cb) => {
    pool.query(`insert into topics(topic_name,topic_imageUrl,website_url) values 
    ('${causeObj.causeName}','${causeObj.image}','${causeObj.charityNavigatorURL}')`, (err, data) => {
        if (err) {
            cb(err)
        } else {
            cb(null,data)
        }
    });
};

const getTopic = (topicName, cb) => {
    topicName = topicName.replace(`'`,`''`)
    pool.query(`select * from topics where lower(topic_name) like lower('%${topicName}%')`, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(null,data);
        }
    });
}

module.exports.getAll = getAll

module.exports.getTopic = getTopic

module.exports.insertTopic = insertTopic
