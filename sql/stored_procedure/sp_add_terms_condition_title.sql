DELIMITER //

CREATE PROCEDURE sp_add_terms_condition_title(
    IN p_left_title VARCHAR(255),
    IN p_right_title VARCHAR(255)
)
BEGIN
    INSERT INTO terms_condition_title (left_title, right_title)
    VALUES (p_left_title, p_right_title);
END//

DELIMITER ;