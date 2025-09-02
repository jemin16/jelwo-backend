DELIMITER $$

CREATE PROCEDURE sp_update_terms_cdn_content(
    IN id INT,
    IN title_id INT,
    IN left_content JSON,
    IN right_content JSON
)
BEGIN
    UPDATE terms_condition_content
    SET title_id = COALESCE(title_id, title_id),
        left_content = COALESCE(left_content, left_content),
        right_content = COALESCE(right_content, right_content)
    WHERE id = id;
END$$

DELIMITER ;
