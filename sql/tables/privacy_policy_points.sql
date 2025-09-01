CREATE TABLE privacy_policy_points (
    id INT AUTO_INCREMENT PRIMARY KEY,
    privacy_policy_id INT NOT NULL,
    left_title VARCHAR(255) DEFAULT NULL,
    left_content TEXT DEFAULT NULL,
    right_title VARCHAR(255) DEFAULT NULL,
    right_content TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (privacy_policy_id) REFERENCES privacy_policy(id) ON DELETE CASCADE
);