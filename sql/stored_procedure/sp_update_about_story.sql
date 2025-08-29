DELIMITER $$

CREATE PROCEDURE sp_update_about_story(
    IN p_id INT,
    IN p_image VARCHAR(255),
    IN p_title VARCHAR(255),
    IN p_description TEXT
)
BEGIN
    UPDATE aboutStory
    SET 
        image = COALESCE(p_image, image),
        title = COALESCE(p_title, title),
        description = COALESCE(p_description, description)
    WHERE id = p_id;
END$$

DELIMITER ;