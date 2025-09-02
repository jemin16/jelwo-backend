CREATE TABLE terms_condition_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title_id INT NOT NULL,
    left_content JSON DEFAULT NULL,
    right_content JSON DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (title_id) REFERENCES terms_condition_title(id)
);