CREATE TABLE refund_policy_points (
    id INT AUTO_INCREMENT PRIMARY KEY,
    refund_policy_id INT NOT NULL,
    left_title VARCHAR(255) DEFAULT NULL,
    left_description VARCHAR(255) DEFAULT NULL,
    right_title VARCHAR(255) DEFAULT NULL,
    right_description VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (refund_policy_id) REFERENCES refund_policy(id)
);