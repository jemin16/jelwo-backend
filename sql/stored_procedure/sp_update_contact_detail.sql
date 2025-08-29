DELIMITER $$

CREATE PROCEDURE sp_update_contact_detail(
    IN id INT,
    IN address VARCHAR(255),
    IN phone VARCHAR(255),
    IN email VARCHAR(255)
)
BEGIN
    UPDATE contactUsContactdetail
    SET address = COALESCE(address, address),
        phone = COALESCE(phone, phone),
        email = COALESCE(email, email)
    WHERE id = id;
END$$

DELIMITER ;