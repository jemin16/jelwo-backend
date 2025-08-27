DELIMITER //

CREATE PROCEDURE sp_add_variant_images_json(
    IN p_product_id INT,
    IN p_images JSON
)
BEGIN
    INSERT INTO variant_images (product_id, images)
    VALUES (p_product_id, p_images);
END //

DELIMITER ;
