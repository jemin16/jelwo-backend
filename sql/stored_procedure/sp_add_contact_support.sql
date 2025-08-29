DELIMITER $$

CREATE PROCEDURE sp_add_contact_support(
    IN icon VARCHAR(255),
    IN title VARCHAR(255),
    IN description TEXT
)
BEGIN
    INSERT INTO contact_support (icon, title, description)
    VALUES (icon, title, description);
END$$

DELIMITER ;
