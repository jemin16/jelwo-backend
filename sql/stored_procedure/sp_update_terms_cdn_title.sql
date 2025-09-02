DELIMITER //

CREATE PROCEDURE sp_update_terms_cdn_title(
    IN p_id INT,
    IN p_left_title VARCHAR(255),
    IN p_right_title VARCHAR(255)
)
BEGIN
    UPDATE terms_condition_title
    SET left_title = COALESCE(p_left_title, left_title),
        right_title = COALESCE(p_right_title, right_title)
    WHERE id = p_id;
END//

DELIMITER ;
