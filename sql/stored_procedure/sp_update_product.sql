DELIMITER $$

CREATE PROCEDURE sp_update_product(
    IN p_id INT, 
    IN p_name VARCHAR(255), 
    IN p_category_id INT, 
    IN p_price DECIMAL(10,2), 
    IN p_old_price DECIMAL(10,2), 
    IN p_stock INT, 
    IN p_rating DECIMAL(3,1), 
    IN p_description TEXT, 
    IN p_image VARCHAR(255), 
    IN p_vendor VARCHAR(255), 
    IN p_type VARCHAR(255), 
    IN p_sku VARCHAR(255), 
    IN p_barcode VARCHAR(255), 
    IN p_weight DECIMAL(10,2)
)
BEGIN
    UPDATE products 
    SET 
        name = COALESCE(p_name, name),
        category_id = COALESCE(p_category_id, category_id),
        price = COALESCE(p_price, price),
        old_price = COALESCE(p_old_price, old_price),
        stock = COALESCE(p_stock, stock),
        rating = COALESCE(p_rating, rating),
        description = COALESCE(p_description, description),
        image = COALESCE(p_image, image),
        vendor = COALESCE(p_vendor, vendor),
        type = COALESCE(p_type, type),
        sku = COALESCE(p_sku, sku),
        barcode = COALESCE(p_barcode, barcode),
        weight = COALESCE(p_weight, weight),
        updated_at = NOW()
    WHERE id = p_id;
END$$

DELIMITER ;
