DELIMITER $$

CREATE PROCEDURE sp_add_blog(
    IN p_image VARCHAR(255),
    IN p_date DATE,
    IN p_name VARCHAR(255),
    IN p_comment_count INT,
    IN p_title VARCHAR(255),
    IN p_contentOne TEXT,
    IN p_contentTwo TEXT,
    IN p_secondImage VARCHAR(255),
    IN p_thirdImage VARCHAR(255),
    IN p_quotes VARCHAR(255),
    IN p_quotesContent TEXT,
    IN p_tags JSON
)
BEGIN
    INSERT INTO blog (image, date, name, comment_count, title, contentOne, contentTwo, secondImage, thirdImage, quotes, quotesContent, tags)
    VALUES (p_image, p_date, p_name, p_comment_count, p_title, p_contentOne, p_contentTwo, p_secondImage, p_thirdImage, p_quotes, p_quotesContent, p_tags);
END$$

DELIMITER ;
