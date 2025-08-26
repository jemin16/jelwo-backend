DELIMITER //

CREATE PROCEDURE sp_add_product_variants(IN p_product_id INT, IN p_size VARCHAR(255), IN p_color VARCHAR(255))
BEGIN
    INSERT INTO product_variants (product_id, size, color) VALUES (p_product_id, p_size, p_color);
END //

DELIMITER ;
