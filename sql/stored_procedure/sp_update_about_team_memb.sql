DELIMITER $$

CREATE PROCEDURE sp_update_about_team_memb
(
    IN p_id INT,
    IN p_image VARCHAR(255),
    IN p_name VARCHAR(255),
    IN p_position VARCHAR(255)
)
BEGIN
    UPDATE aboutTeamsMember
    SET image = COALESCE(p_image, image), name = COALESCE(p_name, name), position = COALESCE(p_position, position)
    WHERE id = p_id;
END$$

DELIMITER ;
