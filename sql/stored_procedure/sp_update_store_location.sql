DELIMITER //
CREATE PROCEDURE sp_update_store_location(
    IN p_id INT,
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
    UPDATE store_location
    SET image = COALESCE(p_image, image),
        shop_name = COALESCE(p_shop_name, shop_name),
        mobile = COALESCE(p_mobile, mobile),
        email = COALESCE(p_email, email),
        address = COALESCE(p_address, address),
        open_days = COALESCE(p_open_days, open_days),
        open_time = COALESCE(p_open_time, open_time),
        close_time = COALESCE(p_close_time, close_time),
        updated_at = CURRENT_TIMESTAMP
    WHERE id = p_id;
END //
DELIMITER ;
