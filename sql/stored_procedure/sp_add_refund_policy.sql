DELIMITER $$

CREATE PROCEDURE sp_add_refund_policy(
    IN p_left_content JSON,
    IN p_right_content JSON,
    IN p_left_title VARCHAR(255),
    IN p_left_description VARCHAR(255),
    IN p_right_title VARCHAR(255),
    IN p_right_description VARCHAR(255)
)
BEGIN
    INSERT INTO refund_policy (left_content, right_content, left_title, left_description, right_title, right_description)
    VALUES (p_left_content, p_right_content, p_left_title, p_left_description, p_right_title, p_right_description);
END$$

DELIMITER ;
