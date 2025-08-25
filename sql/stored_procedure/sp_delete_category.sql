DELIMITER //

CREATE PROCEDURE sp_delete_category(IN p_id INT)
BEGIN
    DELETE FROM categories WHERE id = p_id;
END //

DELIMITER ;
