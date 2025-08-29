DELIMITER $$

CREATE PROCEDURE sp_update_contact_getintouch(
    IN p_id INT,
    IN p_flag VARCHAR(255),
    IN p_address VARCHAR(255),
    IN p_phone VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_country VARCHAR(255)
)
BEGIN
    UPDATE contactGetInTouch
    SET flag = COALESCE(p_flag, flag),
        address = COALESCE(p_address, address),
        phone = COALESCE(p_phone, phone),
        email = COALESCE(p_email, email),
        country = COALESCE(p_country, country)
    WHERE id = p_id;
END$$

DELIMITER ;
