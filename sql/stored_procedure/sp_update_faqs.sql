DELIMITER $$

CREATE PROCEDURE sp_update_faqs(
    IN p_id INT,
    IN p_question VARCHAR(255),
    IN p_answer TEXT,
    IN p_category_id INT
)
BEGIN
    UPDATE faqs
    SET question = COALESCE(p_question, question),
        answer = COALESCE(p_answer, answer),
        category_id = COALESCE(p_category_id, category_id)
    WHERE id = p_id;
END$$

DELIMITER ;
