DELIMITER //

CREATE PROCEDURE sp_delete_product(IN p_id INT)
BEGIN
    DELETE FROM products WHERE id = p_id;
END //

DELIMITER ;
