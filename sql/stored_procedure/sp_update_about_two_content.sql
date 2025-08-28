DELIMITER $$

CREATE PROCEDURE sp_update_about_two_content(
    IN p_id INT,
    IN p_image VARCHAR(255),
    IN p_title VARCHAR(255),
    IN p_description TEXT
)
BEGIN
    UPDATE aboutTwoContentSec
    SET title = COALESCE(p_title, title),
        description = COALESCE(p_description, description),
        image = COALESCE(p_image, image)
    WHERE id = p_id;
END$$

DELIMITER ;
