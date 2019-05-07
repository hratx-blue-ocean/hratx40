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
};

const getHashedPassword = (login, cb) => {
    pool.query(`select "hashedpw" from users where username = '${login.username}'`, (err, hashedPassword)=>{
        if (err){
           console.log(`Database error! Unable to retrieve password for ${login.username}: ${err}`)
        }
        else {
            cb(hashedPassword.rows[0].hashedpw)
        }
    })
};

module.exports.getAll = getAll;