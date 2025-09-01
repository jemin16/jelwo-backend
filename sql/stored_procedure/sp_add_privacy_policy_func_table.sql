DELIMITER $$

CREATE PROCEDURE sp_add_privacy_policy_func_table(
    IN privacy_policy_id INT,
    IN left_name VARCHAR(255),
    IN left_function TEXT,
    IN right_name VARCHAR(255),
    IN right_function TEXT
)
BEGIN
    INSERT INTO privacy_policy_func_tble (privacy_policy_id, left_name, left_function, right_name, right_function)
    VALUES (privacy_policy_id, left_name, left_function, right_name, right_function);
END$$

DELIMITER ;
