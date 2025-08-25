DELIMITER //

CREATE PROCEDURE sp_update_category(IN p_id INT, IN p_name VARCHAR(255))
BEGIN
    UPDATE categories SET name = p_name WHERE id = p_id;
END //

DELIMITER ;