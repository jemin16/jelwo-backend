DELIMITER //
CREATE PROCEDURE sp_add_store_location(
    IN p_image VARCHAR(255),
    IN p_shop_name VARCHAR(255),
    IN p_mobile VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_address VARCHAR(255),
    IN p_open_days VARCHAR(255),
    IN p_open_time VARCHAR(255),
    IN p_close_time VARCHAR(255)
)
BEGIN
    INSERT INTO store_location (image, shop_name, mobile, email, address, open_days, open_time, close_time)
    VALUES (p_image, p_shop_name, p_mobile, p_email, p_address, p_open_days, p_open_time, p_close_time);
END //
DELIMITER ;
