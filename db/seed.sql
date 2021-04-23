DROP TABLE IF EXISTS hh_users;
DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS topics;

CREATE TABLE hh_users(
  id serial PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  user_password VARCHAR(255),
  hash TEXT,
  admin boolean DEFAULT false
);

CREATE TABLE user_info(
  id serial PRIMARY KEY,
  hh_user_id INT REFERENCES hh_users(id),
  first_name VARCHAR(255),
  last_name VARCHAR(255)
);

CREATE TABLE post(
  id serial PRIMARY KEY,
  post_id INT REFERENCES hh_users(id),
  post_text VARCHAR(500)
);

CREATE TABLE topics(
  topic_id serial PRIMARY KEY,
  user_id INT REFERENCES hh_users(id),
  topics_text VARCHAR(255)
);