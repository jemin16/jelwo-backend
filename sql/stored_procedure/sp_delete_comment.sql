DELIMITER $$

CREATE PROCEDURE sp_delete_comment(
    IN p_id INT
)
BEGIN
    DELETE FROM comments WHERE id = p_id;
END$$

DELIMITER ;
