DELIMITER //

CREATE PROCEDURE sp_login_admin (
    IN p_email VARCHAR(255)
)
BEGIN
    SELECT id, full_name, email, password as password_hash, is_active, created_at
    FROM admin
    WHERE email = p_email AND is_active = 1;
END //

DELIMITER ;