DELIMITER $$

CREATE PROCEDURE sp_update_about_two_key(
    IN p_id INT,
    IN p_icon VARCHAR(255),
    IN p_title VARCHAR(255),
    IN p_description TEXT
)
BEGIN
    UPDATE aboutTwoKeyPoint
    SET icon = COALESCE(p_icon, icon),
        title = COALESCE(p_title, title),
        description = COALESCE(p_description, description)
    WHERE id = p_id;
END$$

DELIMITER ;
