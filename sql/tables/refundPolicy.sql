CREATE TABLE refund_policy (
    id INT AUTO_INCREMENT PRIMARY KEY,
    left_content json,
    right_content json,
    left_title VARCHAR(255),
    left_description VARCHAR(255),
    right_title VARCHAR(255),
    right_description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);