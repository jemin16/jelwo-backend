DELIMITER $$

CREATE PROCEDURE sp_add_faqs(
    IN p_question VARCHAR(255),
    IN p_answer TEXT,
    IN p_category_id INT
)
BEGIN
    INSERT INTO faqs (question, answer, category_id)
    VALUES (p_question, p_answer, p_category_id);
END$$

DELIMITER ;
