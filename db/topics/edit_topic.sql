UPDATE topics
SET topics_text = $2
WHERE topic_id = $1;