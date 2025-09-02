DELIMITER $$

CREATE PROCEDURE sp_add_shipping_return_points(
    IN p_shipping_return_id INT,
    IN p_left_points VARCHAR(255),
    IN p_left_description TEXT,
    IN p_right_points VARCHAR(255),
    IN p_right_description TEXT
)
BEGIN
    INSERT INTO shipping_return_points (
        shipping_return_id,
        left_points,
        left_description,
        right_points,
        right_description
    ) VALUES (
        p_shipping_return_id,
        p_left_points,
        p_left_description,
        p_right_points,
        p_right_description
    );
END$$

DELIMITER ;
