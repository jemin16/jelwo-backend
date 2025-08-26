DELIMITER //

CREATE PROCEDURE sp_delete_product_variants(IN p_id INT)
BEGIN
    DELETE FROM product_variants WHERE id = p_id;
END //

DELIMITER ;