const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'andersaustin', //needs to be changed to work in your instance
    host: 'localhost',
    database: 'blueocean',
    password: 'hackreactor', //needs to be changed to work in your instance
    port: 5432
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


module.exports.getAll = getAll
