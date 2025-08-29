DELIMITER $$

CREATE PROCEDURE sp_add_contact_detail(
    IN address VARCHAR(255),
    IN phone VARCHAR(255),
    IN email VARCHAR(255)
)
BEGIN
    INSERT INTO contactUsContactdetail (address, phone, email)
    VALUES (address, phone, email);
END$$

DELIMITER ;
