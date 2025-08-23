DELIMITER $$

CREATE PROCEDURE sp_login_user(
    IN p_email VARCHAR(100)
)
BEGIN
    DECLARE user_count INT DEFAULT 0;

    main: BEGIN
        -- check if user exists
        SELECT COUNT(*) INTO user_count
        FROM users
        WHERE email = p_email;

        IF user_count = 0 THEN
            SELECT 'User not found' AS message, NULL AS password_hash, NULL AS is_verified;
            LEAVE main;
        END IF;

        -- return user details (password hash for bcrypt comparison in Node.js)
        SELECT id, first_name, last_name, email, password AS password_hash, is_verified
        FROM users
        WHERE email = p_email
        LIMIT 1;
    END main;
END $$
DELIMITER ;