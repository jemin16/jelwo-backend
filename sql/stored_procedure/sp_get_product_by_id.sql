DELIMITER $$

CREATE PROCEDURE sp_get_product_by_id(IN product_id INT)
BEGIN
    SELECT * FROM products WHERE id = product_id;
END$$

DELIMITER ;