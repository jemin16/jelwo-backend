DELIMITER $$
CREATE PROCEDURE sp_add_privacy_policy_points(
    IN p_privacy_policy_id INT,
    IN p_left_title VARCHAR(255),
    IN p_left_content TEXT,
    IN p_right_title VARCHAR(255),
    IN p_right_content TEXT
)
BEGIN
    INSERT INTO privacy_policy_points (privacy_policy_id, left_title, left_content, right_title, right_content)
    VALUES (p_privacy_policy_id, p_left_title, p_left_content, p_right_title, p_right_content);
END$$
DELIMITER ;