DELIMITER $$

CREATE PROCEDURE sp_add_about_two_content(
    IN p_title VARCHAR(255),
    IN p_description TEXT,
    IN p_image VARCHAR(255)
)
BEGIN
    INSERT INTO aboutTwoContentSec (title, description, image)
    VALUES (p_title, p_description, p_image);
END$$

DELIMITER ;