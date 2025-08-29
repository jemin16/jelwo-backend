DELIMITER $$

CREATE PROCEDURE sp_add_about_testimonial(
    IN p_image VARCHAR(255),
    IN p_title VARCHAR(255),
    IN p_description TEXT,
    IN p_name VARCHAR(255)
)
BEGIN
    INSERT INTO aboutTestimonial (image, title, description, name)
    VALUES (p_image, p_title, p_description, p_name);
END$$

DELIMITER ;
