DELIMITER $$

CREATE PROCEDURE sp_update_refund_policy_points
(
    IN p_id INT,
    IN p_left_title VARCHAR(255),
    IN p_left_description VARCHAR(255),
    IN p_right_title VARCHAR(255),
    IN p_right_description VARCHAR(255)
)
BEGIN
    UPDATE refund_policy_points
    SET left_title = COALESCE(p_left_title, left_title),
        left_description = COALESCE(p_left_description, left_description),
        right_title = COALESCE(p_right_title, right_title),
        right_description = COALESCE(p_right_description, right_description)
    WHERE id = p_id;
END$$

DELIMITER ;
