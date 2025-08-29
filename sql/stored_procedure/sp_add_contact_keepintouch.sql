DELIMITER $$

CREATE PROCEDURE sp_add_contact_keepintouch(
    IN fullname VARCHAR(255),
    IN email VARCHAR(255),
    IN phone VARCHAR(255),
    IN message TEXT
)
BEGIN
    INSERT INTO contactKeepInTouch (fullname, email, phone, message)
    VALUES (fullname, email, phone, message);
END$$

DELIMITER ;
