DELIMITER $$

CREATE PROCEDURE sp_add_faqs_categories(
    IN category_name VARCHAR(255)
)
BEGIN
    INSERT INTO faqCategories (category_name)
    VALUES (category_name);
END$$

DELIMITER ;
