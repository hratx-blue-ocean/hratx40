DROP DATABASE IF EXISTS blueocean;
CREATE DATABASE blueocean;

\c blueocean;

DROP TABLE IF EXISTS users_topics;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS topics;

CREATE TABLE users(
    user_id serial primary key,
    first_name varchar(20),
    last_name varchar(20),
    username varchar(50) unique,
    email varchar(50) unique,
    hashedPW varchar(100)
);


CREATE TABLE topics(
    topic_id serial primary key,
    topic_name varchar(100),
    topic_imageUrl varchar(200)
);

CREATE TABLE users_topics(
    id serial primary key,
    user_id integer references users (user_id),
    topic_id integer references topics (topic_id)
);

CREATE INDEX topic_name_idx
ON topics USING HASH (topic_name);

CREATE INDEX username_idx
ON users USING HASH (username);

CREATE INDEX email_idx
ON users USING HASH (email);