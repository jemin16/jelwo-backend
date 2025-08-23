DELIMITER $$

CREATE PROCEDURE sp_register_user(
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255),
    IN p_accepted_terms BOOLEAN,
    IN p_otp VARCHAR(6),
    IN p_otp_expiry TIMESTAMP,
    IN p_is_verified BOOLEAN
)
BEGIN
    DECLARE email_exists INT DEFAULT 0;

    main: BEGIN
        -- check duplicate email
        SELECT COUNT(*) INTO email_exists 
        FROM users 
        WHERE email = p_email;

        IF email_exists > 0 THEN
            SELECT 'Email already exists' AS message;
            LEAVE main;
        END IF;

        -- check terms
        IF p_accepted_terms = FALSE THEN
            SELECT 'Please accept the terms and conditions' AS message;
            LEAVE main;
        END IF;

        -- insert user
        INSERT INTO users (
            first_name, last_name, email, password,
            accepted_terms, otp, otp_expiry, is_verified,
            created_at, updated_at
        ) VALUES (
            p_first_name, p_last_name, p_email, p_password,
            p_accepted_terms, p_otp, p_otp_expiry, p_is_verified,
            NOW(), NOW()
        );

        SELECT 'User registered successfully' AS message;
    END main;
END $$
DELIMITER ;
