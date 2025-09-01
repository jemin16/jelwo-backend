DELIMITER $$
CREATE PROCEDURE sp_update_privacy_policy(
    IN p_id INT,
    IN p_left_title VARCHAR(255),
    IN p_left_content TEXT,
    IN p_right_title VARCHAR(255),
    IN p_right_content TEXT,
    IN p_content_index INT
)
BEGIN
    DECLARE current_left_content JSON;
    DECLARE current_right_content JSON;
    
    SELECT 
        COALESCE(left_content, JSON_ARRAY()), 
        COALESCE(right_content, JSON_ARRAY())
    INTO current_left_content, current_right_content
    FROM privacy_policy 
    WHERE id = p_id
    LIMIT 1;
    
    IF p_left_content IS NOT NULL THEN
        IF p_content_index IS NOT NULL THEN
            IF JSON_LENGTH(current_left_content) > p_content_index THEN
                SET current_left_content = JSON_SET(
                    current_left_content,
                    CONCAT('$[', p_content_index, ']'),
                    p_left_content
                );
            END IF;
        ELSE
            SET current_left_content = JSON_ARRAY(p_left_content);
        END IF;
    END IF;
    
    IF p_right_content IS NOT NULL THEN
        IF p_content_index IS NOT NULL THEN
            IF JSON_LENGTH(current_right_content) > p_content_index THEN
                SET current_right_content = JSON_SET(
                    current_right_content,
                    CONCAT('$[', p_content_index, ']'),
                    p_right_content
                );
            END IF;
        ELSE
            SET current_right_content = JSON_ARRAY(p_right_content);
        END IF;
    END IF;
    
    UPDATE privacy_policy
    SET 
        left_title = COALESCE(p_left_title, left_title),
        left_content = CASE WHEN p_left_content IS NOT NULL THEN current_left_content ELSE left_content END,
        right_title = COALESCE(p_right_title, right_title),
        right_content = CASE WHEN p_right_content IS NOT NULL THEN current_right_content ELSE right_content END,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = p_id;
    
    SELECT * FROM privacy_policy WHERE id = p_id;
END$$
DELIMITER ;
