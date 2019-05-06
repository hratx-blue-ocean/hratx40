const Pool = require('pg').Pool;
require('dotenv').config()

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
    })
}

const getTopic = (topicName, cb) => {
    topicName = topicName.replace(`'`,`''`)
    pool.query(`select * from topics where topic_name = '${topicName}'`, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(null,data);
        }
    });
}

module.exports.getAll = getAll

module.exports.getTopic = getTopic

