DELIMITER $$

CREATE PROCEDURE sp_add_terms_cdn_content(
    IN title_id INT,
    IN left_content JSON,
    IN right_content JSON
)
BEGIN
    INSERT INTO terms_condition_content (title_id, left_content, right_content)
    VALUES (title_id, left_content, right_content);
END$$

DELIMITER ;