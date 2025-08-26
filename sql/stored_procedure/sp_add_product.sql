DELIMITER $$

CREATE PROCEDURE sp_add_product(
    IN p_name VARCHAR(255),
    IN p_category_id INT,
    IN p_price DECIMAL(10,2),
    IN p_old_price DECIMAL(10,2),
    IN p_stock INT,
    IN p_rating INT,
    IN p_description TEXT,
    IN p_image VARCHAR(255),
    IN p_vendor VARCHAR(255),
    IN p_type VARCHAR(255),
    IN p_sku VARCHAR(255),
    IN p_barcode VARCHAR(255),
    IN p_weight INT
)
BEGIN
    INSERT INTO products (name, category_id, price, old_price, stock, rating, description, image, vendor, type, sku, barcode, weight)
    VALUES (p_name, p_category_id, p_price, p_old_price, p_stock, p_rating, p_description, p_image, p_vendor, p_type, p_sku, p_barcode, p_weight);
END$$

DELIMITER ;