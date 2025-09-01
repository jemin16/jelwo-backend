CREATE TABLE privacy_policy_func_tble (
    id INT AUTO_INCREMENT PRIMARY KEY,
    privacy_policy_id INT NOT NULL,
    left_name VARCHAR(255) DEFAULT NULL,
    left_function TEXT DEFAULT NULL,
    right_name VARCHAR(255) DEFAULT NULL,
    right_function TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (privacy_policy_id) REFERENCES privacy_policy(id) ON DELETE CASCADE
);