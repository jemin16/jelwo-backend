DELIMITER $$

CREATE PROCEDURE sp_add_about_team_mem
(
    IN p_image VARCHAR(255),
    IN p_name VARCHAR(255),
    IN p_position VARCHAR(255)
)
BEGIN
    INSERT INTO aboutTeamsMember (image, name, position)
    VALUES (p_image, p_name, p_position);
END$$

DELIMITER ;
