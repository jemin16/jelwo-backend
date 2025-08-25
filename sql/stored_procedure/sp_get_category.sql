DELIMITER //

CREATE PROCEDURE sp_get_category()
BEGIN
    SELECT * FROM categories;
END //

DELIMITER ;