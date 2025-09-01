DELIMITER $$

CREATE PROCEDURE sp_add_refund_policy_points
(
    IN p_refund_policy_id INT,
    IN p_left_title VARCHAR(255),
    IN p_left_description VARCHAR(255),
    IN p_right_title VARCHAR(255),
    IN p_right_description VARCHAR(255)
)
BEGIN
    INSERT INTO refund_policy_points (refund_policy_id, left_title, left_description, right_title, right_description)
    VALUES (p_refund_policy_id, p_left_title, p_left_description, p_right_title, p_right_description);
END$$

DELIMITER ;