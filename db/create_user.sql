INSERT INTO hh_users
(username, email, user_password)
VALUES ($1, $2, $3)
RETURNING *;