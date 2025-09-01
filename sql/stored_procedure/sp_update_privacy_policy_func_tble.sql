DELIMITER $$

CREATE PROCEDURE sp_update_privacy_policy_func_tble(
    IN id INT,
    IN privacy_policy_id INT,
    IN left_name VARCHAR(255),
    IN left_function TEXT,
    IN right_name VARCHAR(255),
    IN right_function TEXT
)
BEGIN
    UPDATE privacy_policy_func_tble
    SET privacy_policy_id = COALESCE(privacy_policy_id, privacy_policy_id),
        left_name = COALESCE(left_name, left_name),
        left_function = COALESCE(left_function, left_function),
        right_name = COALESCE(right_name, right_name),
        right_function = COALESCE(right_function, right_function)
    WHERE id = id;
END$$

DELIMITER ;
