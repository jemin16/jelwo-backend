DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS sp_update_faqs_categories(
    IN p_id INT,
    IN p_category_name VARCHAR(255)
)
BEGIN
    UPDATE faqCategories
    SET 
        category_name = COALESCE(p_category_name, category_name),
        updatedAt = CURRENT_TIMESTAMP
    WHERE id = p_id;
    
    SELECT ROW_COUNT() AS affected_rows;
END$$

DELIMITER ;