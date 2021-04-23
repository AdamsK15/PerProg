SELECT *
FROM topics
WHERE topics_text ILIKE '%' || $1 || '%';