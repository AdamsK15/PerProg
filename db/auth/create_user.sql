INSERT INTO hh_users
(username, email, user_password, hash)
VALUES ($1, $2, $3, $4)
RETURNING *;