DELIMITER $$

CREATE PROCEDURE sp_update_contact_support(
    IN id INT,
    IN icon VARCHAR(255),
    IN title VARCHAR(255),
    IN description TEXT
)
BEGIN
    UPDATE contact_support
    SET icon = COALESCE(icon, icon),
        title = COALESCE(title, title),
        description = COALESCE(description, description)
    WHERE id = id;
END$$

DELIMITER ;
