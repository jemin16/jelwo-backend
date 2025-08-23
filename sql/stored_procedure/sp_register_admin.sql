DELIMITER //

CREATE PROCEDURE sp_register_admin (
    IN p_full_name VARCHAR(100),
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(255)
)
BEGIN
    INSERT INTO admin (full_name, email, password)
    VALUES (p_full_name, p_email, p_password);
END //

DELIMITER ;
