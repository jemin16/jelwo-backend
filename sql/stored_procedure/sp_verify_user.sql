DELIMITER $$

CREATE PROCEDURE sp_verify_user(
    IN p_email VARCHAR(100),
    IN p_otp   VARCHAR(6)
)
BEGIN
    DECLARE user_count INT DEFAULT 0;
    DECLARE db_otp VARCHAR(6);
    DECLARE db_expiry TIMESTAMP;
    DECLARE db_verified BOOLEAN;

    main: BEGIN
        -- 1) user exists?
        SELECT COUNT(*) INTO user_count
        FROM users
        WHERE email = p_email;

        IF user_count = 0 THEN
            SELECT 'User not found' AS message;
            LEAVE main;
        END IF;

        -- 2) fetch otp, expiry, verification status
        SELECT otp, otp_expiry, is_verified
          INTO db_otp, db_expiry, db_verified
        FROM users
        WHERE email = p_email
        LIMIT 1;

        -- 3) already verified?
        IF db_verified = TRUE THEN
            SELECT 'User already verified' AS message;
            LEAVE main;
        END IF;

        -- 4) otp match?
        IF db_otp IS NULL OR p_otp IS NULL OR db_otp <> p_otp THEN
            SELECT 'Invalid OTP' AS message;
            LEAVE main;
        END IF;

        -- 5) otp expiry check
        IF db_expiry IS NULL OR db_expiry < NOW() THEN
            SELECT 'OTP expired' AS message;
            LEAVE main;
        END IF;

        -- 6) mark verified & clear otp
        UPDATE users
        SET is_verified = TRUE,
            otp = NULL,
            otp_expiry = NULL,
            updated_at = NOW()
        WHERE email = p_email;

        SELECT 'User verified successfully' AS message;
    END main;
END $$
DELIMITER ;
