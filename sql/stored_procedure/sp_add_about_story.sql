DELIMITER $$

CREATE PROCEDURE sp_add_about_story(
    IN p_image VARCHAR(255),
    IN p_title VARCHAR(255),
    IN p_description TEXT
)
BEGIN
    INSERT INTO aboutStory (image, title, description)
    VALUES (p_image, p_title, p_description);
END$$

DELIMITER ;
