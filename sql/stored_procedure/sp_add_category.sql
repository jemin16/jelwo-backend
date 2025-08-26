DELIMITER //

CREATE PROCEDURE sp_add_category(
    IN p_name VARCHAR(255)
)
BEGIN
    INSERT INTO categories (name) VALUES (p_name);
END //

DELIMITER ;