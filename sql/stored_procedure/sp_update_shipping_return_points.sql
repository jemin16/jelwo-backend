DELIMITER $$    

CREATE PROCEDURE sp_update_shipping_return_points(
    IN p_id INT,
    IN p_shipping_return_id INT,
    IN p_left_points VARCHAR(255),
    IN p_left_description TEXT,
    IN p_right_points VARCHAR(255),
    IN p_right_description TEXT
)
BEGIN
    UPDATE shipping_return_points
    SET
        shipping_return_id = COALESCE(p_shipping_return_id, shipping_return_id),
        left_points = COALESCE(p_left_points, left_points),
        left_description = COALESCE(p_left_description, left_description),
        right_points = COALESCE(p_right_points, right_points),
        right_description = COALESCE(p_right_description, right_description)
    WHERE id = p_id;
END$$

DELIMITER ;
