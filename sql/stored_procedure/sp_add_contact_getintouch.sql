DELIMITER $$

CREATE PROCEDURE sp_add_contact_getintouch(
    IN p_flag VARCHAR(255),
    IN p_address VARCHAR(255),
    IN p_phone VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_country VARCHAR(255)
)
BEGIN
    INSERT INTO contactGetInTouch (flag, address, phone, email, country)
    VALUES (p_flag, p_address, p_phone, p_email, p_country);
END$$

DELIMITER ;
