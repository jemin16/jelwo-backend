DELIMITER $$

CREATE PROCEDURE sp_update_refund_policy(
    IN p_id INT,
    IN p_left_content JSON,
    IN p_right_content JSON,
    IN p_left_title VARCHAR(255),
    IN p_left_description VARCHAR(255),
    IN p_right_title VARCHAR(255),
    IN p_right_description VARCHAR(255)
)
BEGIN
    UPDATE refund_policy
    SET left_content = COALESCE(p_left_content, left_content),
        right_content = COALESCE(p_right_content, right_content),
        left_title = COALESCE(p_left_title, left_title),
        left_description = COALESCE(p_left_description, left_description),
        right_title = COALESCE(p_right_title, right_title),
        right_description = COALESCE(p_right_description, right_description)
    WHERE id = p_id;
END$$

DELIMITER ;