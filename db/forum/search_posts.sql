SELECT *
FROM post
WHERE post_text ILIKE '%' || $1 || '%';