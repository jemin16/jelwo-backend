DELIMITER //

CREATE PROCEDURE sp_update_product_variants(IN p_id INT, IN p_product_id INT, IN p_size VARCHAR(255), IN p_color VARCHAR(255))
BEGIN
    UPDATE product_variants SET product_id = p_product_id, size = p_size, color = p_color WHERE id = p_id;
END //

DELIMITER ;