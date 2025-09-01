DELIMITER $$
CREATE PROCEDURE sp_update_privacy_policy_points(
    IN p_id INT,
    IN p_privacy_policy_id INT,
    IN p_left_title VARCHAR(255),
    IN p_left_content TEXT,
    IN p_right_title VARCHAR(255),
    IN p_right_content TEXT
)
BEGIN
    UPDATE privacy_policy_points
    SET privacy_policy_id = COALESCE(p_privacy_policy_id, privacy_policy_id),
        left_title = COALESCE(p_left_title, left_title),
        left_content = COALESCE(p_left_content, left_content),
        right_title = COALESCE(p_right_title, right_title),
        right_content = COALESCE(p_right_content, right_content)
    WHERE id = p_id;
END$$
DELIMITER ;