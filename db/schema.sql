--use following command:
--psql postgres -f ./db/schema.sql

DROP DATABASE IF EXISTS blueocean;
CREATE DATABASE blueocean;

\c blueocean;

CREATE TABLE users(
    user_id serial primary key,
    first_name varchar(20),
    last_name varchar(20),
    username varchar(50) unique,
    email varchar(50) unique not null,
    hashedPW varchar(100) not null
);


CREATE TABLE topics(
    topic_id serial primary key,
    topic_name varchar(100) unique not null,
    topic_imageUrl varchar(200) not null,
    website_url varchar(200) not null,
    topic_description varchar(500) not null
);

CREATE TABLE users_topics(
    id serial primary key,
    user_id integer not null,
    topic_id integer not null,
    unique (user_id, topic_id)
);

CREATE INDEX topic_name_idx
ON topics USING HASH (topic_name);

CREATE INDEX username_idx
ON users USING HASH (username);

CREATE INDEX email_idx
ON users USING HASH (email);