DELIMITER $$

CREATE PROCEDURE sp_add_about_two_key(
    IN p_icon VARCHAR(255),
    IN p_title VARCHAR(255),
    IN p_description TEXT
)
BEGIN
    INSERT INTO aboutTwoKeyPoint (icon, title, description)
    VALUES (p_icon, p_title, p_description);
END$$

DELIMITER ;
