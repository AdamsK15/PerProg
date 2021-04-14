CREATE TABLE hh_users(
  id serial PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  user_password VARCHAR(255),
  hash TEXT,
  admin boolean DEFAULT false
);