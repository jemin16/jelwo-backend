DELIMITER $$
CREATE PROCEDURE sp_add_privacy_policy(
    IN p_left_title VARCHAR(255),
    IN p_left_content JSON,
    IN p_right_title VARCHAR(255),
    IN p_right_content JSON
)
BEGIN
    INSERT INTO privacy_policy (left_title, left_content, right_title, right_content)
    VALUES (p_left_title, p_left_content, p_right_title, p_right_content);
END$$
DELIMITER ;